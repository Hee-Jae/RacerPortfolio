from flask import request, jsonify, Blueprint, make_response, abort
from models.user import User
from db_connect import db
from flask_bcrypt import Bcrypt
from secret import bwt_key, bwt_algorithm
import requests

import jwt

userbp = Blueprint('userbp', __name__)
bcrypt = Bcrypt()

# @board.route('/main', methods=["POST"])
# def main():
#   jwt = request.form['auth']

@userbp.route('/register', methods=['POST'])
def register():
  user_info = request.get_json()
  email = user_info['email']
  password = user_info['password']
  name = user_info['name']
  type = user_info['type']
  
  user = User.query.filter_by(email=email, type=type).first()
  if user:
    return jsonify("fail")

  hashed_password = bcrypt.generate_password_hash(password).decode()
  new_user = User(email=email, password=hashed_password, name=name, type=type)
  db.session.add(new_user)
  db.session.commit()
  
  return jsonify("success")

@userbp.route('/login', methods=['POST'])
def login():
  login_info = request.get_json()
  email = login_info['email']
  type = int(login_info['type'])
  password = login_info['password']
  
  user = User.query.filter_by(email=email, type=type).first()
  
  if not user:
    return make_response(jsonify({"error_message":"User Not Found"}), 400)

  if bcrypt.check_password_hash(user.password, password):
    data_to_encode = {'id': user.id, 'name': user.name, 'email': user.email, 'type': user.type}
    encoded_user = jwt.encode(data_to_encode, bwt_key, bwt_algorithm)
    return make_response(jsonify({"auth":encoded_user}), 200)
  
  return make_response(jsonify({"error_message":"Login Failed"}), 400)


@userbp.route('/google_login' , methods=['POST'])
def google_login():
  
  token_info = request.get_json()
  id_token = token_info['token']
  token_request = requests.get(f"https://oauth2.googleapis.com/tokeninfo?id_token={id_token}")
  token_json = token_request.json()
  
  name = token_json['family_name'] + token_json['given_name']
  email = token_json['email']
  type = 2
  
  user = User.query.filter_by(email=email, type=type).first()
  if not user:
    new_user = User(email=email, password='google', name=name, type=type)
    db.session.add(new_user)
    db.session.commit()
    
    user = new_user
    
  data_to_encode = {'id': user.id, 'name': user.name, 'email': user.email, 'type': user.type}
  encoded_user = jwt.encode(data_to_encode, bwt_key, bwt_algorithm)
  return make_response(jsonify({"auth":encoded_user}), 200)