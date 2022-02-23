from datetime import datetime
from pydantic import BaseModel
from typing import Optional


class PostBase(BaseModel):
    title: str
    content: str
    author: str


class PostCreate(PostBase):
    pass


class Post(PostBase):
    id: int
    published_date: datetime


class PostDB(Post):
    is_delete: bool

