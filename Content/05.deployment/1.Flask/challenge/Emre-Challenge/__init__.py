from flask import Flask, request
import random


# create and configure the app
app = Flask(__name__)

# a simple page that says hello
@app.route('/status')
def index():
    return 'Alive!'

@app.route('/login', methods=('POST', 'GET'))
def log():
    
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        return f"Login success for user {username} with password of length: {len(password)}!"
   # if not username or not password:
    else:
        return '''<form method='post'>
                    <input type='text' name='username' placeholder='Enter Your UserName'>
                    <input type='text' name='password' placeholder='Enter Your Password'>
                    <button>Submit</button>
                </form>'''

@app.route('/predict/<int:seller_available>/<string:month>/<int:customer_visiting_website>')
def hello(seller_available, month, customer_visiting_website):
    return f"{random.randint(2000, 5000)}"