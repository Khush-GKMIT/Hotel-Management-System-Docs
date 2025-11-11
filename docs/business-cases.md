# Business Use Cases

It describes how a user interacts with the system to achieve a specific goal.

---

## 1. Business Use Case Overview

<div style="text-align: center; max-width: 800px; margin: 0 auto;">

```mermaid
mindmap
  root((Business Use Cases))
    User
      Register, Login
      Logout
      Search Hotels
      View Hotel and Room Details
      Book Room
    Admin
      Login 
      Logout
      Manage Hotel and Details 
      View User Details
      View Bookings
```

</div>

---

## 2. Detailed Use Cases

### UC-01A: User Registration & Login

**Actor:** User  
**Goal:** Provide a secure entry point to the system

**Business Value:**

- Ensures only validated users access booking functionality
- Creates trackable user profiles for future operations

**Main Flow:**

<div style="text-align: center; max-width: 750px; margin: 20px auto;">

```mermaid
flowchart TD
    Start[User Visits Platform] --> Choice{New User or Existing User?}
    Choice -->|New User| Register[Register with Name, Email & Password]
    Choice -->|Existing User| Login[Login with Email & Password]
    Register --> CreateAccount[System Creates New Account]
    CreateAccount --> Verify[Send Verification Email]
    Verify --> Confirmed[User Confirms Email]
    Login --> Authenticate[System Validates Credentials]
    Confirmed --> Grant[System Grants Access]
    Authenticate --> Grant
    Grant --> Access[Access Main Platform]
    
    style Register fill:#e1f5ff
    style CreateAccount fill:#d4edda
    style Login fill:#fff3cd
    style Grant fill:#d4edda
    style Access fill:#c3e6cb
```

</div>

---

### UC-01B: User Logout

**Actor:** User  
**Goal:** Securely end user session and clear authentication

**Business Value:**

- Ensures account security when using shared devices
- Prevents unauthorized access after user leaves platform

**Main Flow:**

<div style="text-align: center; max-width: 750px; margin: 20px auto;">

```mermaid
flowchart TD
    Start[User Clicks Logout] --> Confirm{Confirm Logout?}
    Confirm -->|Yes| Clear[System Clears Session Data]
    Confirm -->|No| Stay[Remain Logged In]
    Clear --> Invalidate[Terminate the Session]
    Invalidate --> Redirect[Redirect to Login Page]
    Redirect --> Success[Logout Successful]
    
    style Start fill:#fff3cd
    style Clear fill:#e1f5ff
    style Success fill:#d4edda
```

</div>

---

### UC-02: View Hotel Details

**Actor:** User  
**Goal:** Allow users to browse hotels using filters and view detailed information including ratings and user feedback

**Business Value:**

- Improves user confidence in booking through transparency
- Reduces cancellation rate due to well-informed decisions

**Features Display:**

<div style="text-align: center; max-width: 750px; margin: 20px auto;">

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
    
    style Start fill:#e1f5ff
    style Proceed fill:#d4edda
    style Search fill:#fff3cd
```

</div>

---

### UC-03: Book a Room

**Actor:** User  
**Goal:** Enable users to complete room reservations using coupon codes with proper validation and error handling

**Business Value:**

- Direct revenue generation
- Smooth checkout improves trust and platform engagement

**Booking Flow:**

<div style="text-align: center; max-width: 750px; margin: 20px auto;">

```mermaid
flowchart TD
    Start[User Selects Hotel with appropriate filters] --> Coupon[Apply Coupon Code]
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
    
    style Start fill:#e1f5ff
    style Success fill:#d4edda
    style Error fill:#f8d7da
    style Failed fill:#f8d7da
    style Cancel fill:#fff3cd
```

</div>

---
