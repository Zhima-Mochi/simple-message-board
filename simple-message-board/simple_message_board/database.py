from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from .config.settings import settings
from sqlalchemy.orm import declarative_base

Base = declarative_base()

ASYNC_DATABASE_URL = f"postgresql+asyncpg://{settings.database_user}:{settings.database_password}@{settings.database_host}/{settings.database_name}"
SYNC_DATABASE_URL = f"postgresql://{settings.database_user}:{settings.database_password}@{settings.database_host}/{settings.database_name}"

async_engine = create_async_engine(
    ASYNC_DATABASE_URL, pool_size=20, echo=settings.debug)
sync_engine = create_engine(SYNC_DATABASE_URL, echo=settings.debug)

SessionLocal = sessionmaker(
    async_engine, expire_on_commit=False, autocommit=False, class_=AsyncSession)
