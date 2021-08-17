from sqlalchemy.orm import backref, relationship
from db_connect import db

class Edu(db.Model):

  __tablename__ = 'edu'

  id       = db.Column(db.Integer, primary_key=True, nullable=False)
  name     = db.Column(db.String(45), nullable=False)
  major    = db.Column(db.String(45), nullable=False)
  type     = db.Column(db.String(45), nullable=False)
  user_id  = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
  userEdu  = relationship("User", backref=backref("edus", order_by=id))
  
  def __init__(self, name, major, type, user_id):
    self.name    = name
    self.major   = major
    self.type    = type
    self.user_id = user_id
