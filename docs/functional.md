# Functional Requirements

It describes the primary functional requirements of the Hotel Room Booking System. It captures both user-side and admin-side functionalities.

---

## 1. User Functional Requirements

### 1.1 User Authentication

| Function | Description |
|----------|-------------|
| User Registration | Users create an account using email and password |
| User Login | Authenticates user and loads homepage |
| Logout | Ends the session securely |

---

### 1.2 Hotel Search & Filters

The homepage provides a comprehensive search and filtering system.

| Filter / Input | Description |
|----------------|-------------|
| Search Bar | Search hotels by name, area or keyword |
| Start & End Date | Select check-in and check-out dates |
| Number of Persons | Filter based on occupancy requirements |
| Room Category | Deluxe / Non-deluxe options |
| Pricing Filter | Set a preferred budget range |

---

### 1.3 Hotel Listing & Details

Users can:

- View hotel cards with name, price, description, and "Book Now" button
- Click **View Details** to open a carousel showing:
    - Images
    - Price
    - Descriptions

---

### 1.4 Booking Module

#### Booking Flow Diagram

<div style="text-align: center; max-width: 700px; margin: 20px auto;">

```mermaid
flowchart TD
    A[Select Hotel] --> B[Choose Payment Gateway or Coupon]
    B --> C[Enter Payment Details / Apply Coupon]
    C --> D[System Validates Transaction]
    D --> E[Booking Confirmed]
    E --> F[Redirect to Profile Page]
    
    style A fill:#e3f2fd
    style B fill:#fff9c4
    style C fill:#ffe0b2
    style D fill:#ffe0b2
    style E fill:#c8e6c9
    style F fill:#c8e6c9
```

</div>

#### User Booking Sequence

<div style="text-align: center; max-width: 700px; margin: 20px auto;">

```mermaid
sequenceDiagram
    participant User
    participant System
    
    User->>System: Register/Login
    User->>System: Select Filters
    System->>User: Display Matching Hotels
    User->>System: View Hotel Details
    User->>System: Book Room
    System->>User: Booking Confirmed
    System->>User: Redirect to Profile
```

</div>

#### Booking Features

| Feature | Description |
|---------|-------------|
| Payment Gateway | Accept credit/debit cards |
| Coupon Application | Apply discount coupons during checkout |
| Booking Confirmation | Display success message with booking details |
| Profile Redirect | Automatically navigate to user profile after booking |

---

### 1.5 User Profile

| Feature | Description |
|---------|-------------|
| Booking History | View all past and current bookings |
| Booking Details | See hotel name, dates, price, and status |
| Account Information | Manage personal details and preferences |

---

## 2. Admin Functional Requirements

### 2.1 Hotel Management

| Function | Description |
|----------|-------------|
| Add Hotel | Create new hotel listings with details and images |
| Edit Hotel | Update existing hotel information |
| View Hotels | Browse all hotels in the system |
| Delete Hotel | Remove hotels from the database |

---

### 2.2 Booking Management

| Function | Description |
|----------|-------------|
| View All Bookings | See complete list of all bookings |
| Booking Details | View user info, hotel, dates, and payment status |

---

### 2.3 User Management

| Function | Description |
|----------|-------------|
| View Users | List all registered users |
| User Details | View user profile and booking history |


---

## 3. Scope (In-Scope and Out-of-Scope)

| Category | In-Scope (Current) | Out-of-Scope (Future) |
|---------|---------------------|------------------------|
| User | Login, search, booking, profile info | Cancel bookings, wishlist |
| Admin | Add/view hotels, view bookings | Analytics dashboard, role permissions |
| System | Coupon, basic payment, filters | Real payment|

---

