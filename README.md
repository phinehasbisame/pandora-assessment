# **MJ Pandora Payment System (Next.js)**

## Overview

The **MJ Pandora Payment System** is a modern web application built with **Next.js** to provide a seamless interface for managing and tracking payment transactions. It focuses on delivering a responsive, intuitive, and performant user experience for viewing payment history, monitoring transaction statuses, and interacting with financial data.

## Features

### **Payment History Management**

View a structured list of all transactions with relevant details such as date, and customer name.

### **Date Filtering**

Filter payments within a specific date range for better data analysis and tracking.

### **Pagination**

Efficiently handle large datasets with optimized pagination and ellipsis navigation.

### **Responsive UI**

Fully responsive design optimized for desktop and mobile devices.

### **Reusable Components**

Modular architecture with reusable UI components (tables, modals, pagination).

### **API Integration**

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript (type safety)
- **Styling:** Tailwind CSS
- **State Management:** Context API, and React Hooks (useState)
- **Data Fetching:** Axios, and SWR (controlled data fetching)
- **Deployment:** Vercel

## Project Structure

```
/app
  /about → About page
    page.tsx
  /payment-history  → Payment history page
    layout.tsx →
    page.tsx →
  globals.css  → all main css resides here
  not-found.tsx  → not found page
  layout.tsx
  page.tsx  → entry page (homepage)

/components → all reusable components are kept here
  /common
    Footer.tsx
    Header.tsx
    Input.tsx
  FilterTable.tsx
  HeaderContent.tsx
  Modal.tsx
  ModalContent.tsx
  Pagination.tsx
  Table.tsx
  TableBody.tsx
  TableHeader.tsx
  Modal.tsx

/const → all constants files are store here
  index.ts

/context → all context files are kept here
  MainContext.tsx

/hooks → reusable logics are kept here through creating custom hooks
  useFetch.ts
  useFetchById.ts
  useFilter.ts
  useMainContext.ts
  useModal.ts

/interfaces → all typescript typing and interfaces logics are kept here
  index.ts

/lib →
  axios.ts → a global data fetching setup

/public

/utils → helper logic
  api-endpoints.ts → all api endpoints are accessible here
  filter-all.ts → it combines both filter-by-date and filter-by-name to give a final search result
  filter-by-date.ts → it helps filter payment history by date
  filter-by-name.ts → it helps filter payment history by name
  format-date.ts → it helps format date to easily read date
```

---

## API Handling

SWR alongside with axios by creating a global axios instance apiClient from ApiClient class and API routes

API routes

```ts
export async function GET() {
  const endpoints = API_ENDPOINTS.payment.allPayments;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiUrl = `${baseUrl}${endpoints}`;

  const res = await axios.get(apiUrl);
  return Response.json(res.data);
}
```

```ts
const useFetch = () => {
  const paymentFetcher = async (
    url: string,
  ): Promise<PaymentHistory[] | null> => {
    const response = await axios.get(url);
    if (!response.data) {
      toast.error("Failed to fetch data");
    }

    return response.data as PaymentHistory[];
  };

  const { data, isLoading, error } = useSWR(
    "/api/payment-history",
    paymentFetcher,
    {
      revalidateIfStale: false,
      shouldRetryOnError: true,
      errorRetryCount: 3,
    },
  );
  return { data, isLoading, error };
};
```

---

## Pagination Logic

Pagination is implemented with:

- Dynamic page calculation
- Controlled navigation (Prev / Next)

## 📅 Date Formatting

Dates are formatted using a utility function:

```ts
formatDate(date);
```

## Filtering

Payments can be filtered by date range, and customer name:

```ts
filterName(searchName, paymentHistories);
```

```ts
filterByDate(data, startDate, endDate);
```

## UI/UX Design Decisions

- Neutral color scheme for financial clarity
- Clean table layout for readability
- Sticky headers for better navigation

## Known Challenges

### **CORS Issues**

Made use of API routes to fix CORS issues

### **Large Dataset Handling**

Managed via pagination and optimized rendering.

## 📦 Getting Started

Clone project from Github using the command `git clone https://github.com/phinehasbisame/pandora-assessment.git`

Navigate to clone project and open your terminal.
Type the following commands to start the project

```bash
npm install
npm run dev
```

Create an environment file in the root directory maybe .env.local and set the env variable

```
NEXT_PUBLIC_BASE_URL=https://**.*/sales-api
where **.* represents the hostname
```

Visit:

```
http://localhost:3000
```

## Author

**Phinehas Osei-Tutu**
Frontend Developer (Next.js, React, TypeScript)
