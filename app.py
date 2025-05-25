from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

# ✅ Google Search Console verification route
@app.route('/google1234567890abcdef.html')
def google_verification():
    return send_from_directory('.', 'google1234567890abcdef.html')

if __name__ == "__main__":
    app.run(debug=True)
