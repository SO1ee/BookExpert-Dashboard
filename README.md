# Employee Dashboard

## 📌 Project Overview
This project is a simple **Employee Dashboard** built with React.  
It demonstrates:
- A login system with authentication using localStorage.
- Protected routes to restrict access to the dashboard.
- A dashboard that displays employee statistics (total, active, inactive).
- Employee management features such as search, edit, and print.
- Responsive design with both mobile card view and desktop table view.

The goal is to provide a lightweight portal where users can log in and manage employee records.

---

## 🛠️ Tech Stack Used
- **React** (functional components, hooks)
- **React Router DOM** (routing and protected routes)
- **Tailwind CSS** (styling and responsive design)
- **JavaScript (ES6+)**
- **LocalStorage** (for authentication persistence)
- **Mock Data** (employees.js for demo purposes)

---

## 🚀 Steps to Run the Project Locally
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd employee-dashboard
## 2.Install Dependencies
    npm install
## 3.Start the development server
    npm run dev
    The app will run on http://localhost:5173 (localhost in Bing) (default Vite port).
## 4.Login credentials
    Email: somahalder171@gmail.com
    Password: admin123
## 5. Navigate
    Login at /
    Dashboard at /dashboard (protected route)
## 📖 Assumptions & Design Decisions
    Implemented using localStorage.

    Only one hardcoded user (somahalder171@gmail.com / admin123) is supported for demo purposes.

    ProtectedRoute ensures only authenticated users can access /dashboard.
## Employee Data:
    Employee records are mock data stored in employees.js.

    No backend integration; all operations are client-side.
## UI/UX:
    Tailwind CSS is used for styling.

    Responsive design: card layout for mobile, table layout for desktop.

    Simple stat cards show total, active, and inactive employees.
## Print Functionality:
    Clicking "Print" generates a new window with employee details and triggers the browser’s print dialog.
## Limitations:
    No persistent database; data resets on refresh.

    Delete functionality is not fully implemented (button present but no handler).

    Authentication is basic and not secure for production use.
## 📂 Project Structure
    src/
    ├── App.jsx                # Main app with routes
    ├── Components/
    │   ├── Dashboard.jsx      # Employee dashboard
    │   ├── EmployeeTable.jsx  # Employee list (cards + table)
    │   ├── Login.jsx          # Login form
    │   ├── Navbar.jsx         # Top navigation bar
    │   ├── ProtectedRoute.jsx # Route guard
    │   └── StatCard.jsx       # Dashboard stat cards
    ├── data/
    │   └── employees.js       # Mock employee data
    └── utils/
    └── auth.js            # Authentication helpers
## Future Improvements
    Add backend API for real authentication and employee data.

    Implement full CRUD (Create, Read, Update, Delete) for employees.

    Improve form validation and error handling.

    Enhance UI with more detailed employee profiles and charts.
