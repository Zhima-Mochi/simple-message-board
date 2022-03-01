from datetime import datetime
from sqlalchemy import TIMESTAMP, Column, String, Integer, DateTime
from .database import Base


class Post(Base):
    __tablename__ = "posts"
    id = Column(Integer, primary_key=True, autoincrement=True)
    author = Column(String(30))
    title = Column(String(100))
    content = Column(String(1000))
    published_date = Column(TIMESTAMP(timezone=True), default=datetime.utcnow,
                            onupdate=datetime.utcnow, index=True)
    is_delete = Column(Integer, default=0)
    __mapper_args__ = {"eager_defaults": True}
