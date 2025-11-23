# Hotel Booking System - Functional Requirements

## Features

### User Authentication and Authorization
- Secure registration and login  
- Access to personal booking history
- Check the user entered is admin or not   

### Hotel and Room Browsing
- View available hotels  
- See room types such as Deluxe and Non-Deluxe  
- Check room photos, pricing, and descriptions  

### Booking
- Simple and smooth room booking flow  

### Admin Panel
- Add hotel and room information  
- Monitor bookings  
- Monitor user details  

---

## Modules

### User Module

| Feature | Description |
|--------|-------------|
| Registration & Login | Secure login access |
| Hotel Search | Browse available hotels |
| Room Type | View Deluxe and Non-Deluxe room options |
| Maximum Persons | View the maximum allowed persons in a room |
| Hotel and Room Details | View photos, pricing, and descriptions |
| Booking | Book rooms easily |
| Booking History | See past bookings |

### Admin Module

| Feature | Description |
|--------|-------------|
| Hotel and Room Management | Add hotels and rooms |
| Booking Management | View and track all bookings |
| User Management | View registered users and their details |



### Booking Flow
```mermaid
flowchart LR
    A[Select Hotel] --> B[View Details]
    B --> C[Book Now]
    C --> D[Pay Now]
    D --> E[Booking Confirmed]
    E --> F[Profile Page]
```

---

### User Profile

| Feature | Description |
|---------|-------------|
| Booking History | View all bookings |
| Booking Details | Hotel, dates, room type, status |

---

## Admin Features

### Hotel & Room Management

| Function | Description |
|----------|-------------|
| Add Hotel/Room | Add new entries |

---

### Booking Management

| Function | Description |
|----------|-------------|
| View All Bookings | List all bookings |
| Booking Details | User, hotel, dates, room info |

---

### User Management

| Function | Description |
|----------|-------------|
| View Users | List all users |
| User Details | User info and bookings |

---

## Future Scope

- Location filter
- Map integration
- Delete hotels, rooms, users
- Multiple admins
- Payment gateway