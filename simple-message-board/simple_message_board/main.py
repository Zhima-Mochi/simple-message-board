from asyncio.log import logger
from sqlalchemy import select
from typing import List
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from . import models, schemas, database, crud
from sqlalchemy.ext.asyncio import AsyncSession

app = FastAPI()

origins = {
    "*"
}

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


async def get_session():
    session: AsyncSession = database.SessionLocal()
    try:
        yield session
    finally:
        await session.close()


@app.on_event("startup")
async def startup():
    # schemas.Base.metadata.drop_all(bind=database.sync_engine)
    schemas.Base.metadata.create_all(bind=database.sync_engine)


@app.on_event("shutdown")
async def shutdown():
    await database.async_engine.dispose()


@app.post("/posts", response_model=models.Post, status_code=status.HTTP_201_CREATED)
async def create_post(post_create: models.PostCreate, session=Depends(get_session)) -> models.Post:
    try:
        new_post = await crud.create_post(session, post_create)
    except Exception as e:
        logger.error(e)
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE)
    await session.commit()
    return models.Post(**new_post.__dict__)


@app.get("/posts", status_code=status.HTTP_200_OK)
async def list_posts(session: AsyncSession = Depends(get_session)) -> List[models.Post]:
    posts_list = await crud.get_posts_list(session)
    await session.commit()
    res = [models.Post(**p.__dict__) for p in posts_list]
    return res
