from flask import Flask
from flask_cors import CORS

from flask_restful import Api, Resource

app = Flask(__name__)
CORS(app)
api = Api(app)

class Toy(Resource):
    def get(self, name):
        return {'massage': 'Hello {} !'.format(name)}

api.add_resource(Toy, '/hello/<string:name>')

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000 ,debug=False)
