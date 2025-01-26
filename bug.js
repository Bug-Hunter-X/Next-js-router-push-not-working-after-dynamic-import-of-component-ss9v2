```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
export default function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about');
  };

  return (
    <button onClick={handleClick}>Go to About</button>
  );
}
```