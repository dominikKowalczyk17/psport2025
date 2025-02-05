# Polsat Sport Clone

This project is a clone of the Polsat Sport website, built using Vue 3, TypeScript, and Vite. The application leverages modern web development tools and practices, including the Composition API, `<script setup>` SFCs, and Pinia for state management.

## Project Setup

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/dominikKowalczyk17/psport2025.git
   cd psport2025
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Development

To start the development server, run:

```sh
npm run dev
```

This will start Vite's development server and you can view the application at http://localhost:3000.

### Build

To build the project for production, run:

```sh
npm run build
```

The built files will be output to the dist directory.

### Preview

To preview the production build, run:

```sh
npm run preview
```

### Project Structure

## Project Structure

- **`src/`** – Contains the application's source code
  - **`components/`** – Vue components used throughout the application
  - **`mocks/`** – Mock data and services for development
  - **`router/`** – Vue Router configuration
  - **`store/`** – Pinia stores for state management
  - **`types/`** – TypeScript type definitions
  - **`utils/`** – Utility functions
  - **`views/`** – Vue components representing different pages
- **`public/`** – Static assets
- **`index.html`** – The main HTML file
- **`package.json`** – Project configuration and dependencies
- **`tailwind.config.js`** – Tailwind CSS configuration
- **`tsconfig.json`** – TypeScript configuration
- **`vite.config.ts`** – Vite configuration

## Learn More

- [Vue 3 Documentation](https://vuejs.org/guide/introduction.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)
