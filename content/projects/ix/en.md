# IX – Internal SaaS Platform for Managing External Workers in Clinics

## Overview

Project of an **internal SaaS platform for managing external workers in clinics**, allowing listing of professionals, their specialties, rates per report, and availability.  

The system enables clinics to **choose the most suitable worker for each task**, while the **payment process and report creation** are fully managed within the platform.  

**Strategic keywords:** SaaS, worker management, task allocation, online payments, secure transactions, NestJS, Next.js, PostgreSQL, Stripe, Resend, transactional emails, complex authentication, multiple access levels, user experience.

---

## Architecture

The architecture was designed to **deliver a complete backend and frontend solution**, scalable and secure for both internal and public use.

### Architectural Pattern

- Backend in **NestJS** with modular architecture and REST APIs  
- Frontend in **Next.js**, covering both admin dashboard and public interface  
- **PostgreSQL** relational database for data persistence  
- Integration with **Stripe** for payments and billing  
- **Resend** for sending transactional emails triggered by system events (order created, approved, in progress, completed)  
- **Complex authentication** with multiple access levels and permissions for internal and external users  

### Technologies and Services Used

- **NestJS** for modular, scalable backend  
- **Next.js** for admin and public frontend  
- **PostgreSQL** as main database  
- **Stripe** for payment processing  
- **Resend** for transactional email notifications  
- Robust authentication system with multiple permission levels  

---

## My Main Contributions

- Built the **full end-to-end application**, including backend, frontend, Stripe and Resend integrations  
- Implemented the **payment and order management flows** within the platform  
- Developed features for listing and filtering workers by specialty, rate, and availability  
- Configured and triggered **transactional emails via Resend** for automated notifications  
- Implemented **complex authentication**, managing multiple user types and permission levels  
- Maintained direct **client communication** for requirements gathering and functional adjustments  

---

## Impact

- Clinics can choose the most suitable professional for each task  
- Payments and report management centralized within the platform  
- Reduced administrative complexity and increased operational efficiency  
- Scalable platform supporting multiple users and clinics, with secure permission control  

> Complete SaaS system for managing external workers internally, focusing on operational efficiency, automated payments, secure authentication, and user experience.