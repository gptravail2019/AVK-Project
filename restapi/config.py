import os
from pony import orm
from pony.orm import *
from dotenv import load_dotenv
load_dotenv()

from pathlib import Path  # python3 only
env_path = Path('.') / '.env'

load_dotenv(dotenv_path=env_path)

provider = os.getenv("PROVIDER")
dbhost = os.getenv("DBHOST")
dbuser = os.getenv("DBUSER")
dbpasswd = os.getenv("DBPWD")
dbase = os.getenv("DATABASE")

sqldebug = set_sql_debug(os.getenv("SQL_DEBUG"))

db = Database()
connection = db.bind(provider=provider, host=dbhost, user=dbuser, passwd=dbpasswd, db=dbase)


