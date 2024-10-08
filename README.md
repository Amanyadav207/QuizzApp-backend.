# QuizApp Backend

This is the backend server for the QuizApp application. It provides API endpoints for managing quiz questions and topics.

## Technologies Used

- Node.js
- Express.js
- MongoDB 
- Cors for handling Cross-Origin Resource Sharing

## Prerequisites

- Node.js (version 12 or higher)
- npm (version 6 or higher)
- MongoDB instance (local or cloud-based)

## Installation

1. Clone the repository:
    ```
    git clone git@github.com:Amanyadav207/QuizzApp-backend..git
    cd QuizzApp-backend.
    ```
2. Install dependencies:
    ``` 
    npm install
    ```
3. 4. Create a `.env` file in the root directory and add your environment variables:
    ```
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    ```
5. Start the server:
    ```
    npm start
    ```
## API Endpoints

The server runs on `http://localhost:5000` by default. The following endpoints are available:

### Get Topics
- **GET** `/api/topics`
- Retrieves all available quiz topics.

### Get Questions by Topic
- **GET** `/api/question/:topicName`
- Retrieves questions for a specific topic.
- `:topicName` should be replaced with the name of the topic.

### Add Question
- **POST** `/api/question`
- Adds a new question to the database.
- Requires a JSON body with the question details.

## Database Configuration

The database connection is managed in the `config/db.js` file. Make sure to set up your MongoDB connection string in the `.env` file.