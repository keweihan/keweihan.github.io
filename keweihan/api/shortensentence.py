from flask import Flask
import keweihan

@keweihan.app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"