# Express Logging Middleware

This project demonstrates how to implement a custom logging middleware in an Express.js application. The middleware logs detailed information about each incoming HTTP request.

## 📋 Overview

The logging middleware captures the following details:
- HTTP Method
- Requested URL
- Timestamp of the request
- Time taken to process the request

## 📦 Features

- ✅ Logs request method, URL, and timestamp  
- ✅ Logs duration of each request  
- ✅ Modular middleware (`logger.js`) for easy reuse  
- ✅ Console-based output for real-time visibility  

## 📁 Project Structure

.
├── logger.js # Custom middleware
├── server.js # Main application
└── README.md # Project documentation