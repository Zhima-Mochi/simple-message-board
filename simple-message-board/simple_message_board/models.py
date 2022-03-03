from datetime import datetime
from typing import List
from pydantic import BaseModel, Field


class PostBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=50, example="Important")
    content: str = Field(..., min_length=1, max_length=500,
                         example="I want to announce something, please come to my office.")
    author: str = Field(..., min_length=1, max_length=10, example="teacher")


class PostCreate(PostBase):
    pass


class Post(PostBase):
    id: int
    published_date: datetime


class ResponseBase(BaseModel):
    post_id: int = Field(..., example=1)
    author: str = Field(..., min_length=1, max_length=10, example="student")
    message: str = Field(..., min_length=1, max_length=500,
                         example="I will come right now.")


class ResponseCreate(ResponseBase):
    pass


class Response(ResponseBase):
    id: int
    response_date: datetime


class PostWithRspNum(Post):
    responses_num: int


class PostWithResponse(Post):
    responses: List[Response]
