# Test Plan – StayEase Hotel Booking System

## 1. Introduction
This document outlines the testing strategy for the StayEase Hotel Booking System.  
The purpose is to validate the core functionalities such as user authentication, room management, and booking workflows for both the frontend (React) and backend (Node.js + Express + MongoDB).

---

## 2. Objective
- Ensure all APIs, UI components, and booking flows work as expected.  
- Verify that critical user journeys (Login → Search → Book) run without functional issues.  
- Confirm that system behavior meets acceptance criteria before deployment.

---

## 3. Test Items

### **Frontend (React)**
- Login Page  
- Register Page  
- Rooms Listing Page  
- Booking Page  
- User Profile  
- Admin Dashboard  

### **Backend (Node + Express)**
- `/api/users/register`  
- `/api/users/login`  
- `/api/rooms/getallrooms`  
- `/api/bookings/bookroom`  

### **Database**
- MongoDB Collections: Users, Rooms, Bookings  

---

## 4. Testing Approach

### **4.1 Manual Functional Testing**
Performed via browser and Postman.

### **4.2 Automation Framework (Minimal)**
- **Framework:** Jest + Supertest  
- **Description:**  
  - Jest provides unit testing  
  - Supertest allows API endpoint testing  

---

## 5. Data-Driven Testing (Test Data)

### **Users**

| Username  | Email             | Password  |
|-----------|-------------------|-----------|
| testUser  | test@example.com  | Test@123  |

### **Rooms**

| Room No | Type       | Rent / Day |
|---------|------------|-------------|
| 101     | Deluxe     | 2500        |
| 203     | Non-Deluxe | 1000        |

### **Booking**

| User     | Room | From Date   | To Date     |
|----------|------|--------------|--------------|
| testUser | 101  | 2025-01-15   | 2025-01-17   |

---

## 6. Test Cases (Manual)

### **TC001 – User Registration**

| Field      | Value                                                                 |
|------------|------------------------------------------------------------------------|
| Objective  | Verify user registration works                                          |
| Steps      | 1. Go to Register page <br>2. Enter valid details <br>3. Submit         |
| Expected   | User created & success message displayed                                |

---

### **TC002 – User Login**

| Field      | Value                                                             |
|------------|-------------------------------------------------------------------|
| Objective  | Validate login with correct credentials                            |
| Steps      | 1. Open Login page <br>2. Enter valid email/pass <br>3. Submit     |
| Expected   | Redirect to Home page                                              |

---

### **TC003 – Fetch All Rooms**

| Field     | Value                               |
|-----------|--------------------------------------|
| Objective | Validate `/api/rooms/getallrooms`    |
| Method    | GET                                  |
| Expected  | Array of rooms with data             |

---

### **TC004 – Book a Room**

| Field     | Value                                                                     |
|-----------|----------------------------------------------------------------------------|
| Objective | Validate booking flow                                                      |
| Steps     | 1. Select room → Book Now <br>2. Fill date range <br>3. Confirm booking    |
| Expected  | Booking saved & confirmation message                                       |

---
