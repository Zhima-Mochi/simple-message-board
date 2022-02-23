from fastapi import Depends, FastAPI, HTTPException, status
from . import models, schemas, database
from sqlalchemy.ext.asyncio import AsyncSession

app = FastAPI()


async def get_session():
    session: AsyncSession = database.SessionLocal()
    try:
        yield session
    finally:
        await session.close()


@app.on_event("startup")
async def startup():
    schemas.Base.metadata.drop_all(bind=database.sync_engine)
    schemas.Base.metadata.create_all(bind=database.sync_engine)


@app.on_event("shutdown")
async def shutdown():
    await database.async_engine.dispose()
