```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About(){
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/hello');
            const jsonData = await response.json();
            setData(jsonData);
        };
        fetchData();
    }, []);

    if(data === null){
        return <p>Loading...</p>;
    }
    return(
        <div>
            <h1>About Page</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
```
```javascript
// pages/api/hello.js

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}
```