# Pizza and Juice places by using Yelp API

# ( Implimented the code using  Clean Architecture )

## Overview
This project is an Express.js-based application that provides both REST API and GraphQL endpoints using Apollo Server to fetch pizza and juice places from the Yelp API, with middleware for CORS, rate limiting, structured logging, and comprehensive testing using Jest and Supertest.



## Features
- Fetch pizza places
- Fetch juice places
- Fetch both pizza and juice places
- Uses Yelp API for data retrieval
- Implements middleware for CORS and rate limiting

## Tech Stack Used
- **Backend :** Node.js,  Express.js , Apollor server , graphql
- **API Integration :**   Yelp API
- **Middleware :**  CORS , Rate Limiting
- **Logging :**    Winston Logger
- **Testing :**   Jest , Supertest

## Clone & Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/Rashid-123/MSA-assignment.git
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   YELP_API_KEY = your_yelp_api_key
   POR = 5000
   FRONTEND_URL = your_frontend_url
   ```
4. **Run the Server**
   ```sh
   npm run dev
   ```

## API Endpoints
### **GET /api/search/pizza**
- Fetches a list of pizza places
- **Response:** `{ places: [...] }`

### **GET /api/search/juice**
- Fetches a list of juice places
- **Response:** `{ places: [...] }`

### **GET /api/search/combo**
- Fetches both pizza and juice places
- **Response:** `{ places: [...] }`

## Running Tests
To run integration tests:
```sh
npm test
```

## Troubleshooting
- If a request returns `404`, ensure the API routes are correctly defined in `app.js`.
- Check the `.env` file for correct Yelp API credentials.
- Ensure required dependencies are installed (`npm install`).



## Troubleshooting
- Check the `.env` file for correct Yelp API credentials.
- Ensure required dependencies are installed (`npm install`).

