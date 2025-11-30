📘 Product Catalogue Application – Frontend Assignment

Project Demo:
https://youtu.be/sYfP6Bo2UQ4

This project is a React.js-based Product Catalogue Application, built as part of a frontend development assignment. The goal of this project is to implement a clean login flow, dynamic data rendering, category navigation, pagination, and performance optimizations when handling large datasets.


📌 Project Objective

Build a functional Product Catalogue UI with login, category navigation, pagination, and efficient rendering, using the provided JSON datasets (response1.json and response2.json).



🛠 Backend Setup (Minimal – Only Auth Logic):

> Although this is a frontend-heavy assignment, a small backend was created only for authentication purposes.

> Implemented in Backend
 
> User Signup
 
> User Signin
 
> JWT token generation



📌 All catalogue data, rendering, navigation, and logic are fully handled in the frontend.

🖥 Frontend Implementation (Main Focus)

The frontend is the heart of this assignment. All key features—including tree navigation, pagination, dataset switching, and performance optimization—are implemented in React.

📂 1. Login Page

A simple login screen where the user enters email/password.
On successful authentication, the user is redirected to the Product Catalogue dashboard.

📂 2. Product Catalogue Dashboard

This screen displays:

    Left Sidebar: Category Tree Navigation
    
    Right Section: Frequent Items / Selected Category Items

Data is dynamically populated from:

    response1.json (default)
    
    response2.json (when the dataset is switched to “dataset-IMF”)

🌲 3. Dynamic Tree Navigation (Major Highlight)

    One of the most important parts of this project.

Features:

    Converts nested JSON into a Tree Structure
    
    Fully dynamic — no hardcoded category names
    
    Built using a recursive function
    
    Smooth updates on dataset switch
    
    Works seamlessly for deeply-nested categories
    
    This demonstrates structural mapping of data and rendering complex UI from raw JSON.

📄 4. Pagination (10 items per page)

    To avoid overwhelming the UI, only 10 records are shown at a time.

Highlights:

    Next/Previous navigation
    
    Works for both datasets
    
    Prevents heavy rendering
    
    Maintains state when switching categories

⚡ 5. Performance Optimization (Large Dataset Handling)

    response2.json (dataset-IMF) contains a large number of items, making the app slow without optimization.

To solve this:

    Techniques Implemented
    
    Lazy Loading: Renders items in chunks
    
    useMemo & React.memo: Avoid unnecessary re-renders
    
    Optimized state structure: No repeated nested renders
    
    Efficient tree building: Precomputed and cached
    
    These ensure the UI remains smooth even with thousands of records.

🔄 6. Dataset Switching

    When “dataset-IMF” is selected:
    
    The sidebar tree reloads using response2.json
    
    The frequent items refresh
    
    Pagination resets
    
    Lazy loading ensures fast rendering

🧰 Tech Stack

    React.js (Primary Framework)
    
    TypeScript
    
    Vite
    
    Node.js (Auth-only backend)
    
    CSS / Tailwind CSS

🎉 Experience

This project was both fun and challenging, especially when working with:

Large dataset rendering

Tree navigation UI

Performance optimization

React state management

Pagination and lazy loading

It required balancing clean UI, smooth UX, and efficient data handling, which made it an enjoyable and insightful assignment.
