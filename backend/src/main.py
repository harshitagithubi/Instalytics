from fastapi import FastAPI
from src.api.routes import auth, analytics, comparison, reports

app = FastAPI()

app.include_router(auth.router)
app.include_router(analytics.router)
app.include_router(comparison.router)
app.include_router(reports.router)