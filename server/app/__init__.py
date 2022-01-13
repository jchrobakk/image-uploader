from flask import Flask 

ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

def create_app():
    app = Flask(__name__)

    app.config.from_object('config')

    with app.app_context():
        from . import views

    return app