from secret import db_pw

SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:'+db_pw+'@localhost/racer_portfolio?charset=utf8'
SQLALCHEMY_TRACK_MODIFICATIONS = False