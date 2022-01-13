from string import ascii_letters
from flask import current_app as app, redirect, url_for, request
from werkzeug.utils import secure_filename
import os
from random import choice
from . import ALLOWED_EXTENSIONS

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        if 'file' not in request.files:
            return {"message": "No file was found."}
        file = request.files['file']
        if file.filename == '':
            return {"message": "No selected file."}
        if file and allowed_file(file.filename):
            file_extension = "." + file.filename.rsplit('.', 1)[1].lower()
            filename = secure_filename('image' + "".join([choice(ascii_letters) for _ in range(5)]) + file_extension)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return redirect(url_for('download', image=filename))
    return {"message": ""}

@app.route('/uploading')
def uploading():
    return {"message": ""}

@app.route('/download/<image>')
def download(image):
    return {
        "message": "",
        "url": request.url
    }
