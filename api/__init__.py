"""Kewei REST API."""
import flask

app = flask.Flask(__name__)  # pylint: disable=invalid-name

from insta485.api.resources import get_resources
from insta485.api.posts import get_posts
from insta485.api.posts import get_post_comments
from insta485.api.posts import post_addcomment
from insta485.api.post import get_post
from insta485.api.likes import get_likes, delete_like, create_like
