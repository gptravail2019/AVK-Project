import os
from os import environ

basedir = os.path.abspath(os.path.dirname(__file__))
SQLALCHEMY_ECHO = False
SQLALCHEMY_TRACK_MODIFICATIONS = True
SQLALCHEMY_DATABASE_URI = 'mysql://root:root@0.0.0.0:3307/avk'

FLASK_DEBUG = environ.get('FLASK_DEBUG')
SECRET_KEY = environ.get('SECRET_KEY')

db.bind(provider='mysql', host='', user='', passwd='', db='')

PROVIDER='mysql'
DBHOST='0.0.0.0'
DBUSER='root'
DBPWD=root
DATABASE=avk

