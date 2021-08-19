from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from db_connect import db
from api.user_api import userbp
from api.posts import posts
from secret import SECRET_KEY, JWT_SECRET_KEY
from oauth2client.contrib.flask_util import UserOAuth2
from flask_jwt_extended import JWTManager
import config

def create_app():
    app = Flask(__name__)
    app.register_blueprint(userbp)
    app.register_blueprint(posts)
    app.config.from_object(config)
    db.init_app(app)

    migrate = Migrate()
    migrate.init_app(app, db, compare_type=True)
    from models import user, award, edu, project, certificate
    
    app.secret_key = SECRET_KEY
    
    app.config['JWT_SECRET_KEY'] = JWT_SECRET_KEY
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = config.expires_access
    app.config['JWT_REFRESH_TOKEN_EXPIRES'] = config.expires_refresh
    jwt = JWTManager(app)
    
    CORS(app)
        
    return app

if __name__ == "__main__":
    create_app().run(debug=True) # 배포할 때 debug=True 안지우면 오랑우탄