FROM python:3.8

ENV POETRY_VERSION=1.1.12

RUN pip install "poetry==$POETRY_VERSION"

WORKDIR /app
COPY poetry.lock pyproject.toml /app/

RUN poetry config virtualenvs.create false && poetry install --no-dev

COPY ./simple_message_board /app/simple_message_board
COPY ./app.py /app/app.py

CMD ["uvicorn","simple_message_board.main:app","--host","0.0.0.0","--port","8080"]