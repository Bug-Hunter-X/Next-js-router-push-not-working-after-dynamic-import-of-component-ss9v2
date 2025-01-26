# Next.js router.push not working after dynamic import of component

This repository demonstrates a bug where `router.push` from Next.js's `useRouter` hook fails to work correctly when the component containing the navigation is dynamically imported. 

## Bug Description

The application has a main page (`pages/index.js`) that imports a component (`components/MyComponent.js`). `MyComponent` uses the `useRouter` hook to navigate to an `/about` page. When loaded normally the navigation works fine.  However, when attempting to import `MyComponent` dynamically the navigation fails. This is likely due to the timing of the dynamic import relative to the component's lifecycle, resulting in the router not being properly initialized before `router.push` is called.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the "Go to About" button. Notice it doesn't navigate when the component is dynamically imported.

## Solution

The solution involves ensuring the `router` is initialized and available before calling `router.push`.  A simple method involves using `useEffect` and checking for the router's existence before proceeding with the navigation.