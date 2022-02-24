from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional


class PostBase(BaseModel):
    title: str = Field(..., max_length=50, example="Important")
    content: str = Field(..., max_length=500,
                         example="I want to announce something, please come to my office.")
    author: str = Field(..., max_length=10, example="teacher")


class PostCreate(PostBase):
    pass


class Post(PostBase):
    id: int
    published_date: datetime


class PostDB(Post):
    is_delete: bool
