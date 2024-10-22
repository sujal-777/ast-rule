# Rule Engine with AST

## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Setup Instructions

1. **Backend Setup**:
   - Navigate to `backend/` directory.
   - Run `npm install` to install dependencies.
   - Start the server using `npm start`.

2. **Frontend Setup**:
   - Navigate to `frontend/` directory.
   - Run `npm install` to install dependencies.
   - Start the frontend using `npm start`.

3. **Run with Docker**:
   - Run `docker-compose up` to start the entire stack.

## API Endpoints
- `POST /api/rules/create` - Create a new rule.
- `POST /api/rules/combine` - Combine multiple rules.
- `POST /api/rules/evaluate` - Evaluate a rule against user data.
