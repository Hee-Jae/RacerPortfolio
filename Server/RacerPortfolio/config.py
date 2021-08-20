from secret import DB_PW
from datetime import timedelta

SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:'+DB_PW+'@localhost/racer_portfolio?charset=utf8'
SQLALCHEMY_TRACK_MODIFICATIONS = False

expires_access = timedelta(days=30)
expires_refresh = timedelta(days=30)