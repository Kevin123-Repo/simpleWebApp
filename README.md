# Simple Web App

This is a full-stack web application consisting of a front-end built with React and a back-end using Express and MongoDB.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

## Installation

### 1. Install Dependencies

Run the following command in both the **front-end** and **back-end** directories to install dependencies:

```sh
npm install
```

---

## Back-end

The back-end is built using **Express.js** and uses **MongoDB** as the database.

### Setup

1. Navigate to the `backend` folder.
2. Edit the `.env` file and set up your MongoDB URI:
   ```sh
   mongo_url = 'your_mongodb_connection_string'
   ```
3. Start the server:
   ```sh
   npm start
   ```

### Available Scripts

#### `npm start`

Runs the back-end server.

#### `npm test`

Runs the test suite for the back-end.

> **Note:** Before running tests, update the `id` in test files with an actual document `_id` from your database to ensure the tests pass. Look for comments indicating where to make changes.

---

## Front-end

The front-end was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Setup

1. Navigate to the `frontend` folder.
2. Start the development server:
   ```sh
   npm start
   ```

### Available Scripts

#### `npm start`

Runs the app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page reloads automatically when you make changes. You can also see lint errors in the console.

---

## Additional Resources

- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

