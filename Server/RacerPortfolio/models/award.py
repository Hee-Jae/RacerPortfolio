from sqlalchemy.orm import backref, relationship
from db_connect import db

class Award(db.Model):

  __tablename__ = 'award'

  id          = db.Column(db.Integer, primary_key=True, nullable=False)
  name        = db.Column(db.String(45), nullable=False)
  description = db.Column(db.String(500))
  user_id     = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
  user_award   = relationship("User", backref=backref("awards", order_by=id))

  def __init__(self, name, description, user_id):
    self.name         = name
    self.description  = description
    self.user_id      = user_id
