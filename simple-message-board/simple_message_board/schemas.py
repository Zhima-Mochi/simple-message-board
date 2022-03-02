from datetime import datetime, timezone
from sqlalchemy import TIMESTAMP, Column, String, Integer, DateTime
from .database import Base


def get_tz_utc_now():
    return datetime.utcnow().replace(tzinfo=timezone.utc)


class Post(Base):
    __tablename__ = "posts"
    id = Column(Integer, primary_key=True, autoincrement=True)
    author = Column(String(30))
    title = Column(String(100))
    content = Column(String(1000))
    published_date = Column(TIMESTAMP(timezone=True), default=get_tz_utc_now,
                            onupdate=get_tz_utc_now, index=True)
    is_delete = Column(Integer, default=0)
    __mapper_args__ = {"eager_defaults": True}
