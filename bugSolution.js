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
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function MyComponent() {
  const router = useRouter();

  useEffect(() => {
    //Check for router
    if(router.isReady) {
      const handleClick = () => {
          router.push('/about');
        };
        
      return () => {};
    }
  }, [router]);

  return (
    <button onClick={() => {router.isReady ? router.push('/about') : null;}}>Go to About</button>
  );
}
```