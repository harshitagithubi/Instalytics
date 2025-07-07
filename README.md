Instagram Analytics
A full-stack web application for Instagram account analytics with a modern UI.
Setup

Install dependencies:
Backend: pip install -r backend/requirements.txt
Frontend: npm install in frontend/


Set up .env file in backend/ with MONGODB_URI and SECRET_KEY.
Run MongoDB locally or use MongoDB Atlas.
Start backend: uvicorn backend.src.main:app --reload in backend/.
Start frontend: npm start in frontend/.

Deployment

Frontend: Deploy to Vercel.
Backend: Deploy to Render with Docker.
