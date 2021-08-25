from flask import jsonify, Blueprint
from flask_jwt_extended import jwt_required

from models.user import User


network = Blueprint('network', __name__, url_prefix='/api/network')

@network.route('', methods=['GET'])
@jwt_required()
def get_portfolio():
  users = User.query.all()
  json_users = [user.as_dict() for user in users]

  return jsonify(json_users), 200