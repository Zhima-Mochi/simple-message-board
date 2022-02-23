from pydantic import BaseSettings


class Settings(BaseSettings):
    debug: bool = False
    database_host: str
    database_name: str
    database_user: str
    database_password: str

    class Config:
        env_file = ".env"


settings = Settings()