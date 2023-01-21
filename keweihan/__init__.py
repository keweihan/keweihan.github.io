"""Kewei REST API."""
import flask

# app is a single object used by all the code modules in this package
app = flask.Flask(__name__)  # pylint: disable=invalid-name

import keweihan.views  # noqa: E402  pylint: disable=wrong-import-position
import keweihan.api  # noqa: E402  pylint: disable=wrong-import-position
