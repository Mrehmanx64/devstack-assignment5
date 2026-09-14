# Dev Stack

A modern web application that helps developers explore and build their ideal technology stack. Browse through curated frontend, backend, database, and tooling options, then create and manage your custom development stack.

## Technology Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Toastify

## Features

- **Interactive Technology Cards** - Browse 12+ technologies across multiple categories with detailed information including ratings, difficulty levels, and badges
- **Smart Stack Builder** - Add technologies to your personal stack with duplicate detection and validation
- **Responsive Design** - Fully optimized mobile, tablet, and desktop experience with hamburger menu navigation

## React Questions

**What is JSX, and why is it used in React?**

JSX is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript files. It makes the code more readable and easier to understand because you can see the structure of your UI directly in the component logic.

**What is the difference between props and state?**

Props are data passed from parent to child components and are read-only. State is data managed within a component that can change over time. Props flow down, state is managed locally.

**What does the useState hook do, and where did you use it in this project?**

useState lets you add state variables to functional components. I used it to manage the hamburger menu toggle state in the navbar and to track the selected technologies in the stack throughout the app.

**What does the useEffect hook do, and why did you need it to load the JSON data?**

useEffect runs side effects in components like data fetching or subscriptions. However, in this project I used React's `use` hook with Suspense instead to load JSON data, which is a more modern approach for handling async data.

**Why does every item in a .map() list need a unique key prop?**

Keys help React identify which items have changed, been added, or removed. Without unique keys, React might re-render items incorrectly or lose component state during updates. I used the technology `id` field as the key.

**What is conditional rendering? Show one place you used it.**

Conditional rendering means showing different UI based on conditions. I used it in the Your Stack panel to display either an empty state message when no technologies are selected, or the list of selected technologies when items exist.

**How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

Data flows down through props. To send data back up, the parent passes a callback function as a prop, and the child calls that function. I used this pattern with `isAdded` and `setIsAdded` props to manage the stack state across components.

