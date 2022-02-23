import simple_message_board
import uvicorn
uvicorn.run("simple_message_board.main:app", host="127.0.0.1", port=8080)
