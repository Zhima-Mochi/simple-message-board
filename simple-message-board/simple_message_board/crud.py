from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import insert, select
from . import models, schemas


async def create_post(session: AsyncSession, post_create: models.PostCreate):
    new_post = schemas.Post(**post_create.dict())
    session.add(new_post)
    return new_post

async def get_posts_list(session:AsyncSession):
    select_query = select(schemas.Post).where(schemas.Post.is_delete==0).order_by(schemas.Post.published_date.desc()).limit(1000)
    result = await session.execute(select_query)
    result = result.scalars()
    return result


# async def get_post_by_id(session: AsyncSession, post_id: int):
#     select_query = select(schemas.Post).where(schemas.Post.id == post_id)
#     result = await session.execute(select_query)
#     post = result.scalars().first()
#     if post is None:
#         return post
#     return models.Post(**post.__dict__)
