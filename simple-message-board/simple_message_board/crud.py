from cProfile import label
from unittest import result
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import insert, select
from . import models, schemas
from sqlalchemy.orm import selectinload, joinedload
from sqlalchemy.sql import func


async def create_post(session: AsyncSession, post_create: models.PostCreate):
    new_post = schemas.Post(**post_create.dict())
    session.add(new_post)
    return new_post


async def create_response(session: AsyncSession, response_create: models.ResponseCreate):
    new_response = schemas.Response(**response_create.dict())
    session.add(new_response)
    return new_response


async def get_posts_list(session: AsyncSession):
    select_query = select(schemas.Post, func.count(schemas.Response.id).label('responses_num')).outerjoin(schemas.Response).where(schemas.Post.is_delete == 0).group_by(schemas.Post.id).order_by(
        schemas.Post.published_date.desc()).limit(1000)
    result = await session.execute(select_query)
    temp = []
    for r in result:
        r[0].responses_num = r[1]
        temp.append(r[0])
    result = temp
    return result


async def get_post_with_responses(session: AsyncSession, post_id: int):
    select_query = select(schemas.Post).where(
        schemas.Post.id == post_id).options(selectinload(schemas.Post.responses))
    result = await session.execute(select_query)
    return result.scalar()
