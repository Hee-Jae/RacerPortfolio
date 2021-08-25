import os

from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from oauth2client.contrib.flask_util import UserOAuth2

from api.user_api import userbp
from api.posts import posts
from api.edus import edus
from api.awards import awards
from api.profile import profiles
from api.projects import projects
from api.certificates import certificates
from api.network import network

from secret import SECRET_KEY, JWT_SECRET_KEY, STORAGE_NAME, STORAGE_KEY
from db_connect import db, azure_storage
import config


def create_app():
    app = Flask(__name__)
    app.register_blueprint(userbp)
    app.register_blueprint(posts)
    app.register_blueprint(edus)
    app.register_blueprint(awards)
    app.register_blueprint(profiles)
    app.register_blueprint(projects)
    app.register_blueprint(certificates)
    app.register_blueprint(network)
    
    app.config.from_object(config)
    db.init_app(app)

    migrate = Migrate()
    migrate.init_app(app, db, compare_type=True)
    from models import user, award, edu, project, certificate, token
    
    app.config['UPLOAD_DIR'] = os.getcwd()
    
    app.secret_key = SECRET_KEY
    
    app.config['JWT_SECRET_KEY'] = JWT_SECRET_KEY
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = config.expires_access
    app.config['JWT_REFRESH_TOKEN_EXPIRES'] = config.expires_refresh
    app.config['AZURE_STORAGE_ACCOUNT_NAME'] = STORAGE_NAME
    app.config['AZURE_STORAGE_ACCOUNT_KEY'] = STORAGE_KEY

    jwt = JWTManager(app)
    azure_storage.init_app(app)
    CORS(app)
        
    return app

if __name__ == "__main__":
    create_app().run(debug=True) # 배포할 때 debug=True 안지우면 오랑우탄