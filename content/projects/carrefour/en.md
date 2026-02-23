# Carrefour Order Autonomy and Backoffice Platform

## Overview

Project of a **platform to improve user experience in the logged-in area and order page**, enabling customers to clearly view order details and have autonomy to **cancel, return, or exchange orders**.  

The system also aimed to **reduce customer contact with the call center (SAC)**, lowering operational costs, and **enhance agent experience**, enabling faster issue resolution.  

The solution integrates **React frontend**, **BFF**, and **GCP-based microservices**, providing consistency and control over different product types coming from multiple systems.

**Strategic keywords:** user experience, order autonomy, order reversals, call center efficiency, backoffice portal, microfrontends, React, BFF, GCP, microservices, workflow validation, heterogeneous data integration.

---

## Architecture

The architecture was designed to **integrate frontend, BFF, and order microservices**, ensuring clarity and autonomy for end users, while efficiently supporting call center agents.

### Architectural Pattern

- Backend-for-Frontend (BFF) for unified API access and integration of heterogeneous systems  
- Order microservices hosted on **GCP**  
- Microfrontends for backoffice portal  
- Order reversal flow validation based on order status and payment method  

### Technologies and Services Used

- **React** for building the user interface and “My Account” / Orders page  
- **Node.js (BFF)** for orchestrating calls between frontend and microservices  
- **GCP** for order microservices and data processing  
- **Microfrontends** in the backoffice portal for maintenance and performance improvements  
- Validation of cancellation, return, and exchange flows based on order status  

---

## My Main Contributions

- Developed the **order reversal flow**, allowing customers to choose refund methods based on payment type  
- Enhanced the **“My Account” and Orders page**, improving user autonomy and clarity  
- Maintained and optimized the **backoffice portal**, reducing latency while minimizing impact on call center operations  
- Implemented **BFF** to unify data from multiple systems and product types  
- Planned deployment windows strategically to avoid disrupting agent workflows  

---

## Impact

- Customers gained greater autonomy and clarity in managing their orders  
- Reduced contact rate to the call center, lowering operational costs  
- Faster and more efficient backoffice portal for call center agents  
- Effective integration of heterogeneous data from multiple systems  

> Order management and backoffice platform focused on user autonomy, operational efficiency, and continuous improvement of customer experience.