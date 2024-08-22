# Setup and Installation


1. **Clone the Repository:**

   - Download the repository to your local machine using:

     ```bash
     git clone <repository-url>
     ```

2. **Switch to the Branch:**

   - Change to the `redis-cache` branch:

     ```bash
     git checkout redis-cache
     ```

3. **Execute the Following Commands:**

   1. **Install Dependencies:**

      ```bash
      make install
      ```

      - This command installs all necessary dependencies for the project.

   2. **Start Containers:**

      ```bash
      make up
      ```

      - This command starts all the defined containers.

   3. **Clean Up:**

      ```bash
      make clean
      ```

      - This command stops and removes all running containers.

# News Aggregator with Redis Caching

## Overview

The **News Aggregator with Redis Caching** is a backend service designed to fetch and cache news headlines from a public news API. This project aims to provide a high-performance news aggregation service by leveraging Redis for efficient data caching, reducing API call frequency, and improving response times.

## Features

- **News Aggregation:** Retrieve news headlines from a public news API (e.g., NewsAPI) based on country and category.
- **Redis Caching:** Implement caching using Redis to store and serve news data, reducing the load on the news API and improving response times.
- **Koa.js Framework:** Utilize Koa.js to build a RESTful API with route handling and middleware support.
- **Environment Management:** Use environment variables for configuration, including API keys and Redis settings.

## API Endpoints

- **GET /news/:country/:category**
  - **Description:** Fetch news headlines for a specified country and category.
  - **Parameters:**
    - `country`: The country code (e.g., `us`, `gb`).
    - `category`: The news category (e.g., `technology`, `sports`).
  - **Response:** JSON object containing news headlines.

## Technology Stack

- **Backend Framework:** Koa.js
- **Caching:** Redis
- **API Requests:** Axios
- **Containerization:** Docker
- **Environment Management:** `.env` files


