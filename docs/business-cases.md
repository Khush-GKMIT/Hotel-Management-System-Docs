# Business Use Cases

These use cases represent the value delivered to both end users and administrators.

---

## 1. Business Use Case Overview

<div style="text-align: center; max-width: 800px; margin: 0 auto;">

```mermaid
mindmap
  root((Business Use Cases))
    User
      Register & Login
      Search Hotels
      View Hotel Room Details
      Book Room
    Admin
      Manage Hotels
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

<div style="text-align: center; max-width: 700px; margin: 20px auto;">

```mermaid
flowchart TD
    A[User Registers] --> B[Enter Email + Password]
    B --> C[Credentials Verified]
    C --> D[System Grants Access]
    D --> E[Access Main Platform]
    
    style A fill:#e3f2fd
    style E fill:#c8e6c9
```

</div>

---

### UC-02: View Hotel Details

**Actor:** User  
**Goal:** Allow users to evaluate hotels comprehensively

**Business Value:**

- Improves user confidence in booking
- Reduces cancellation rate due to informed decisions

**Features Display:**

<div style="text-align: center; max-width: 700px; margin: 20px auto;">

```mermaid
flowchart LR
    A[View Hotel Rooms] --> B[Photo Carousel]
    A --> C[Analyze Hotel Rooms as per rerequirement]
    A --> D[Analyze maximum persons allowed in the room]
    A --> E[Hotel Room Description]
    
    style A fill:#fff9c4
    style B fill:#f3e5f5
    style C fill:#f3e5f5
    style D fill:#f3e5f5
    style E fill:#f3e5f5
```

</div>

---

### UC-03: Book a Room

**Actor:** User  
**Goal:** Complete room reservation

**Business Value:**

- Direct revenue generation
- Smooth checkout improves trust and platform engagement

**Booking Flow:**

<div style="text-align: center; max-width: 800px; margin: 20px auto;">

```mermaid
flowchart TD
    A[User Selects Hotel & Dates] --> B[Choose Payment Method or Apply Coupon]
    B --> C[System Processes Transaction]
    C --> D[System Confirms Booking]
    D --> E[User Redirected to Profile Page]
    
    style A fill:#e3f2fd
    style B fill:#fff9c4
    style C fill:#ffe0b2
    style D fill:#c8e6c9
    style E fill:#c8e6c9
```

</div>

---
