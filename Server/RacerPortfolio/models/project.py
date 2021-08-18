from sqlalchemy.orm import backref, relationship
from db_connect import db

class Project(db.Model):

  __tablename__ = 'project'

  id           = db.Column(db.Integer, primary_key=True, nullable=False)
  name         = db.Column(db.String(45), nullable=False)
  description  = db.Column(db.String(500), nullable=False)
  startdate    = db.Column(db.Date, nullable=False)
  enddate      = db.Column(db.Date, nullable=False)
  url          = db.Column(db.String(256))
  user_id      = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
  user_project  = relationship("User", backref=backref("projects", order_by=id))
  
  def __init__(self, name, description, startdate, enddate, user_id):
    self.name         = name
    self.description  = description
    self.startdate    = startdate
    self.enddate      = enddate
    self.user_id      = user_id