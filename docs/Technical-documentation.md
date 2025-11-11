# Technical Documentation

## Architecture Diagram

<div style="text-align: center;">
    <img src="../images/Flowchart.png" alt="Architecture Diagram" style="max-width: 900px; width: 100%; height: auto;">
</div>

---

## Deployment Flow

<div style="text-align: center; max-width: 700px; margin: 20px auto;">

```mermaid
graph TD
    A[Developer writes code] --> B[Push to GitHub Repository]
    B --> C[GitHub Actions Triggered]
    C --> D[Run Tests]
    D --> E{Tests Pass?}
    E -->|Yes| F[Deploy Frontend to EC2]
    E -->|Yes| G[Deploy Backend to EC2]
    E -->|No| H[Deployment Failed]
    F --> I[System Live]
    G --> I
    
    style A fill:#e1f5ff
    style B fill:#fff3e0
    style C fill:#f3e5f5
    style D fill:#e8f5e9
    style F fill:#ffe0b2
    style G fill:#ffe0b2
    style I fill:#c8e6c9
    style H fill:#ffcdd2
```

</div>

---

## System Architecture

<div style="text-align: center; max-width: 800px; margin: 20px auto;">

```mermaid
graph TB
    User[User<br/>Web Browser] --> VPC[Amazon VPC<br/>Virtual Private Cloud]
    
    subgraph AWS["Amazon Web Services"]
        VPC --> FE[Frontend EC2<br/>React.js<br/>Public Subnet]
        VPC --> PS[Private Subnet]
        
        PS --> BE[Backend EC2<br/>Node.js + Express.js]
        PS --> DB[MongoDB<br/>Database]
        
        FE <-->|API Requests| BE
        BE <-->|CRUD Operations| DB
    end
    
    GH[GitHub Actions<br/>CI/CD Pipeline] -.->|Deploy| FE
    GH -.->|Deploy| BE
    
    style User fill:#e3f2fd
    style VPC fill:#fff9c4
    style FE fill:#ffccbc
    style BE fill:#c5e1a5
    style DB fill:#b3e5fc
    style PS fill:#f0f0f0
    style GH fill:#d1c4e9
```

</div>

---

## Component Description

| Component | Technology | Description |
|-----------|------------|-------------|
| **User** | Web Browser | Accesses the hotel booking website through a web browser |
| **Amazon Cloud** | AWS | Provides scalability, security, and reliability for the entire system |
| **VPC** | Virtual Private Cloud | Isolated network environment for secure communication, protects system from unauthorized access |
| **Frontend EC2** | React.js | User interface displaying hotel rooms, booking forms, and user dashboard. Deployed automatically via GitHub Actions |
| **Private Subnet** | AWS Network | Secure zone isolated from public internet, contains Backend and Database for enhanced security |
| **Backend EC2** | Node.js + Express.js | Handles business logic and API requests, processes user authentication, bookings, and payments |
| **MongoDB** | NoSQL Database | Stores all application data  |
| **GitHub Actions** | CI/CD Pipeline | Automated deployment from GitHub repositories to EC2 servers with separate workflows for Frontend and Backend |

---

## Data Flow

<div style="text-align: center; max-width: 650px; margin: 20px auto;">

```mermaid
sequenceDiagram
    participant U as User
    participant FE as Frontend EC2
    participant BE as Backend EC2
    participant DB as MongoDB

    U->>FE: 1. Interacts with Website
    FE->>BE: 2. Sends API Request<br/>(Login, Search, Book)
    BE->>DB: 3. Query/Store Data
    DB-->>BE: 4. Return Data
    BE-->>FE: 5. Send Response
    FE-->>U: 6. Display Results
```

</div>

### Flow Explanation

| Step | From | To | Action |
|------|------|-----|--------|
| 1 | User | Frontend | User interacts with the website (search hotels, make bookings) |
| 2 | Frontend | Backend | Sends API requests for login, room search, booking operations |
| 3 | Backend | MongoDB | Queries and stores data in the database |
| 4 | MongoDB | Backend | Returns requested data |
| 5 | Backend | Frontend | Sends response with processed data |
| 6 | Frontend | User | Displays results on the user interface |
