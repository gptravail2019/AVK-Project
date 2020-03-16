from flask import Flask
from marshmallow import Schema, fields, pre_load, validate
from flask_marshmallow import Marshmallow
from config import connection, db, Required, PrimaryKey, Optional, Set
import datetime

ma = Marshmallow()

class Category(db.Entity):
    __table__ = 'categories'
    id = PrimaryKey(int, auto=True)
    name = Required(str, 200)
    comments = Set("Comment")

    #id = db.Column(db.Integer, primary_key=True)
    #name = db.Column(db.String(150), unique=True, nullable=False)

    def __init__(self, name):
        self.name = name

class Comment(db.Entity):
    __table__ = 'comments'
    id = PrimaryKey(int, auto=True)
    comment = Optional(str,250)
    creation_date = Required(datetime.datetime, sql_default='CURRENT_TIMESTAMP')
    category = Required(Category)

    #id = db.Column(db.Integer, primary_key=True)
    #comment = db.Column(db.String(250), nullable=False)
    #creation_date = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)    
    #category_id = db.Column(db.Integer, db.ForeignKey('categories.id', ondelete='CASCADE'), nullable=False)
    #category = db.relationship('Category', backref=db.backref('comments', lazy='dynamic' ))

    def __init__(self, comment, category_id):
        self.comment = comment
        self.category = category

class CategorySchema(ma.Schema):
    id = fields.Integer()
    name = fields.String(required=True)


class CommentSchema(ma.Schema):
    id = fields.Integer(dump_only=True)
    category_id = fields.Integer(required=True)
    comment = fields.String(required=True, validate=validate.Length(1))
    creation_date = fields.DateTime()

db.generate_mapping(create_tables=True)