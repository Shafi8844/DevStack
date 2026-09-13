 # Dev Stack

![Dev Stack](./src/assets/banner-stack.png)

## Project Description

Dev Stack is a modern React web app where developers can explore popular technologies and build their own custom development stack. Users can browse tools by category, check difficulty and rating, then add or remove technologies from their selected stack.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Toastify
- JSON data

## Features

- Browse a curated list of frontend, backend, database, language, and tooling technologies.
- Add technologies to a personal stack and remove single items or clear the full stack.
- Get helpful toast messages when a technology is added, removed, or already selected.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses it because it makes UI code easier to read and write.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change when the user interacts with the app.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing data in a component. In this project, I used it to store the selected technologies in `yourStack` and to change the card button text after a technology is added.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders, so it is often used to fetch JSON data from an API or local file. In this project, I loaded the JSON data with a promise, `Suspense`, and React's `use()` instead of `useEffect`.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It makes updates faster and prevents UI bugs when items are added, removed, or changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, the stack card button shows `Add to Stack` before selecting and `Added to Stack` after selecting.

```tsx
{isSelected === false ? 'Add to Stack' : 'Added to Stack'}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is passed from parent to child using props. A child can send data back by calling a function that the parent passed as a prop, like `setYourStack` or `Remove`.
