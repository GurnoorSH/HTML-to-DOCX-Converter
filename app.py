from flask import Flask, render_template, request, send_file
from converter import convert_html_to_docx
import io
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert():
    if 'htmlFile' not in request.files:
        return 'No file part', 400
    file = request.files['htmlFile']
    if file.filename == '':
        return 'No selected file', 400
    if file:
        try:
            html_content = file.read().decode('utf-8')
            # Basic check to see if it's an HTML file
            if not bool(BeautifulSoup(html_content, "html.parser").find()):
                return "Invalid HTML file", 400

            doc = convert_html_to_docx(html_content)

            file_stream = io.BytesIO()
            doc.save(file_stream)
            file_stream.seek(0)

            return send_file(
                file_stream,
                as_attachment=True,
                download_name='converted.docx',
                mimetype='application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            )
        except Exception as e:
            return str(e), 500

if __name__ == '__main__':
    app.run(debug=True)
