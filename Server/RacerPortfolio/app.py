from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from secret import secret_key
import config

def create_app():
    app = Flask(__name__)
    app.config.from_object(config)
    db = SQLAlchemy(app)

    app.secret_key = secret_key
    
    return app

if __name__ == "__main__":
    create_app().run()