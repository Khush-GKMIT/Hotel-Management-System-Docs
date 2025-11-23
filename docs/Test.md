# Testing Documentation

## Overview

This document describes the testing strategy and test cases for the Hotel Booking System, covering both frontend and backend components.

---

## Testing Tools

| Type | Tool |
|------|------|
| Frontend | Jest + React Testing Library |
| Backend | Jest + Supertest |

---

## Frontend Tests

### Login Screen Tests

#### Positive Test Cases

1. Form renders with email, password fields and login button
2. User can type in email and password fields
3. Successful login saves user data and redirects to homepage
4. Loading spinner appears during login request
5. Already logged-in users redirect to home page

#### Negative Test Cases

1. Error shown when fields are empty
2. Error shown for invalid email format
3. Wrong password displays error component
4. Network failure shows error component
5. Error component appears when API fails

**Test Status:** All 10 tests passing

---

## Backend Tests

### User API Tests

#### Positive Test Cases

| Endpoint | Test Description |
|----------|------------------|
| `GET /getallusers` | Returns all users successfully |
| `POST /register` | Creates new user with valid data |
| `POST /login` | Login successful with valid credentials |

#### Negative Test Cases

| Endpoint | Test Description |
|----------|------------------|
| `GET /getallusers` | Handles database error |
| `POST /register` | Rejects missing required fields |
| `POST /login` | Rejects invalid credentials |

**Test Status:** All 6 tests passing

---

### Booking API Tests

#### Positive Test Cases

| Endpoint | Test Description |
|----------|------------------|
| `POST /getbookingsbyuserid` | Returns user bookings successfully |

#### Negative Test Cases

| Endpoint | Test Description |
|----------|------------------|
| `POST /bookroom` | Rejects when room not found |

**Test Status:** All 2 tests passing

---

### Hotel API Tests

#### Positive Test Cases

| Endpoint | Test Description |
|----------|------------------|
| `POST /getbookingsbyuserid` | Fetches bookings for specific user |

#### Negative Test Cases

| Endpoint | Test Description |
|----------|------------------|
| `POST /bookroom` | Fails when room doesn't exist in database |

**Test Status:** All 2 tests passing

---

## Test Summary

| Category | Total Tests | Status |
|----------|-------------|--------|
| Frontend Tests | 10 | Pass |
| Backend User API | 6 | Pass |
| Backend Booking API | 2 | Pass |
| Backend Hotel API | 2 | Pass |
| **Total** | **20** | **Pass** |

---

## Bug Tracking

Most bugs identified during testing are documented and tracked in the bug report spreadsheet.

**Bug Report Link:** [View Bug Report](https://docs.google.com/spreadsheets/d/1sewoAtYv1sCKzZQdqX_TVmioAWRCuymYrnelAxh5xig/edit?gid=0#gid=0)

---

## Running Tests

### Frontend Tests
```bash
cd frontend
npm test
```

### Backend Tests
```bash
cd backend
npm test
```
