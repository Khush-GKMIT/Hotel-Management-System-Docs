# Business Use Cases

It describes how a user interacts with the system to achieve a specific goal.

---

## 1. Business Use Case Overview

<div style="text-align: center; max-width: 800px; margin: 0 auto;">

```mermaid
mindmap
  root((Business Use Cases))
    User
      Register & Login
      Search Hotels
      View Hotel and Room Details
      Book Room
    Admin
      Login
      Manage Hotel and Details 
      View User Details
      View Bookings
```

</div>

---

## 2. Detailed Use Cases

### UC-01: User Registration & Login

**Actor:** User  
**Goal:** Provide a secure entry point to the system

**Business Value:**

- Ensures only validated users access booking functionality
- Creates trackable user profiles for future operations

**Main Flow:**

```mermaid
flowchart TD
    Start[User Visits Platform] --> Choice{New User or Existing User?}
    Choice -->|New User| Register[Register with Name, Email & Password]
    Choice -->|Existing User| Login[Login with Email & Password]
    Register --> Verify[Credentials Verified]
    Login --> Verify
    Verify --> Grant[System Grants Access]
    Grant --> Access[Access Main Platform]
```

---

### UC-02: View Hotel Details

**Actor:** User  
**Goal:** Allow users to browse hotels using filters and view detailed information including ratings and user feedback

**Business Value:**

- Improves user confidence in booking through transparency
- Reduces cancellation rate due to well-informed decisions

**Features Display:**

```mermaid
flowchart TD
    Start[User Views Hotel Details] --> Photos[Browse Photos of Hotel & Rooms]
    Start --> Ratings[View Ratings & Reviews]
    Start --> Feedback[Read User Feedback]
    Start --> Description[Read Hotel & Room Description]
    Photos --> Decision{Satisfied?}
    Ratings --> Decision
    Feedback --> Decision
    Description --> Decision
    Decision -->|Yes| Proceed[Proceed to Book Room]
    Decision -->|No| Search[Search Other Hotels]
```

---

### UC-03: Book a Room

**Actor:** User  
**Goal:** Enable users to complete room reservations using coupon codes with proper validation and error handling

**Business Value:**

- Direct revenue generation
- Smooth checkout improves trust and platform engagement

**Booking Flow:**

```mermaid
flowchart TD
    Start[User Selects Hotel & appropriate filters] --> Coupon[Apply Coupon Code]
    Coupon --> Validate{Coupon Valid?}
    Validate -->|Yes| Process[System Processes Booking]
    Validate -->|No| Error[Show Error Message]
    Error --> Retry{Retry?}
    Retry -->|Yes| Coupon
    Retry -->|No| Cancel[Booking Cancelled]
    Process --> Confirm{Booking Successful?}
    Confirm -->|Yes| Success[Booking Confirmed]
    Confirm -->|No| Failed[Booking Failed]
    Success --> Profile[Redirect to Profile Page]
    Failed --> Retry
```

---
