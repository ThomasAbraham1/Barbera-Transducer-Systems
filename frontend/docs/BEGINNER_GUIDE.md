# Frontend Beginner's Guide

Welcome to the Barbera Transducers frontend project! This guide is designed to help you get started with the codebase, understand the technology stack, and make your first contributions.

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

-   **Node.js**: (Version 18 or higher recommended) - [Download Node.js](https://nodejs.org/)
-   **npm**: (Comes with Node.js)

### Installation

1.  **Navigate to the frontend directory**:
    ```bash
    cd frontend
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```
    This command downloads all the libraries and tools listed in `package.json` into the `node_modules` folder.

### Running the Project

To start the development server:

```bash
npm run dev
```

Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## 📂 Project Structure

Here's a quick tour of the important folders and files:

-   **`src/`**: This is where all the source code lives.
    -   **`components/`**: Reusable UI building blocks (e.g., `Navbar.tsx`, `Footer.tsx`, `ProductCard.tsx`).
    -   **`pages/`**: Components that represent full pages (e.g., `HomePage.tsx`, `AboutPage.tsx`).
    -   **`assets/`**: Images, fonts, and other static files.
    -   **`App.tsx`**: The main component that sets up routing and the overall layout.
    -   **`main.tsx`**: The entry point of the application where React is mounted to the DOM.
    -   **`index.css`**: Global styles and Tailwind CSS directives.
-   **`public/`**: Static assets that are served directly (e.g., `favicon.ico`).
-   **`package.json`**: Lists dependencies and scripts for the project.
-   **`tailwind.config.js`**: Configuration for Tailwind CSS.
-   **`vite.config.ts`**: Configuration for the Vite build tool.

## 🛠️ Tech Stack

We use a modern and powerful stack to build this application:

-   **[React](https://react.dev/)**: A JavaScript library for building user interfaces. We use functional components and Hooks.
-   **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that helps catch errors early and improves developer experience.
-   **[Vite](https://vitejs.dev/)**: A super-fast build tool and development server.
-   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid styling.
-   **[Framer Motion](https://www.framer.com/motion/)**: A library for creating smooth animations and transitions.
-   **[React Router](https://reactrouter.com/)**: Handles navigation between different pages in the app.

## 📝 Common Tasks

### Adding a New Page

1.  Create a new file in `src/pages/`, e.g., `NewPage.tsx`.
2.  Define your component:
    ```tsx
    import React from 'react';

    const NewPage = () => {
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold">New Page</h1>
        </div>
      );
    };

    export default NewPage;
    ```
3.  Add a route in `src/App.tsx`:
    ```tsx
    import NewPage from './pages/NewPage';
    // ... inside <Routes>
    <Route path="/new-page" element={<NewPage />} />
    ```

### Adding a New Component

1.  Create a new file in `src/components/`, e.g., `MyButton.tsx`.
2.  Define your component with props (if needed):
    ```tsx
    import React from 'react';

    interface MyButtonProps {
      label: string;
      onClick: () => void;
    }

    const MyButton: React.FC<MyButtonProps> = ({ label, onClick }) => {
      return (
        <button
          onClick={onClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {label}
        </button>
      );
    };

    export default MyButton;
    ```
3.  Use it in a page or another component:
    ```tsx
    import MyButton from '../components/MyButton';

    // ...
    <MyButton label="Click Me" onClick={() => console.log('Clicked!')} />
    ```

### Styling with Tailwind CSS

Instead of writing separate CSS files, we use utility classes directly in the `className` prop.

-   **Colors**: `text-red-500`, `bg-gray-100`
-   **Spacing**: `p-4` (padding), `m-2` (margin)
-   **Flexbox**: `flex`, `items-center`, `justify-between`
-   **Typography**: `text-xl`, `font-bold`, `uppercase`
-   **Responsiveness**: `md:flex` (apply flex only on medium screens and up)

Example:
```tsx
<div className="bg-white shadow-md rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-2">Card Title</h2>
  <p className="text-gray-600">This is some content inside a card.</p>
</div>
```

## 📚 Learn More

-   [React Documentation](https://react.dev/learn)
-   [TypeScript for React Beginners](https://react.dev/learn/typescript)
-   [Tailwind CSS Docs](https://tailwindcss.com/docs)
