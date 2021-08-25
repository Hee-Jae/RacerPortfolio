from flask_sqlalchemy import SQLAlchemy
from azure.storage.blob import BlobServiceClient
from secret import STORAGE_KEY
db = SQLAlchemy()
blob_service_client = BlobServiceClient(account_url="https://racerportfolio.blob.core.windows.net/", credential=STORAGE_KEY)