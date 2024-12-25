This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# User Management Table

A simple web application built with **Next.js**, **Shadcn**, **TanStack Query**, and **TanStack Table** that fetches user data from a public API, displays it in a table with sorting, filtering, search, and pagination functionality.

## Features

- **Data Fetching**: Fetch user data from `https://jsonplaceholder.typicode.com/users` using **TanStack Query**.
- **Sorting**: Sort the table by columns like `Name`, `Email`.
- **Filtering**: Filter data based on columns (e.g., by `Name`).
- **Search**: Global search functionality to filter across all columns.
- **Pagination**: Supports pagination with dynamic routing for each page.
- **UI**: Designed with **Shadcn** (Radix UI components) for a clean and responsive interface.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Shadcn](https://github.com/shadcn/ui) (Radix UI components)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query)
- **Table Management**: [TanStack Table](https://tanstack.com/table)
- **API**: [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/users)

## Installation Instructions

### Prerequisites

Ensure that you have the following tools installed:

- [Node.js](https://nodejs.org/) (>= 16.x)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/rmd360/zybra-task.git
cd zybra-task
