from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from db_connect import db
from api.user_api import userbp
from secret import secret_key
import config

def create_app():
    app = Flask(__name__)
    app.register_blueprint(userbp)
    app.config.from_object(config)
    db.init_app(app)

    migrate = Migrate()
    migrate.init_app(app, db, compare_type=True)
    from models import user, award, edu, project, certificate
    
    app.secret_key = secret_key
    CORS(app)
        
    return app

if __name__ == "__main__":
    create_app().run(debug=True) # 배포할 때 debug=True 안지우면 오랑우탄