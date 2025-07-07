from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class InstagramUsername(BaseModel):
    username: str

class ComparisonRequest(BaseModel):
    username1: str
    username2: str