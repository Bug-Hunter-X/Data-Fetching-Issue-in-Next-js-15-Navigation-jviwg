```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await fetch('/api/hello');
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch(error){
                console.error("Error fetching data:", error);
                setData({error: 'Failed to fetch data'});
            } finally{
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if(loading){
        return <p>Loading...</p>;
    }
    if(data && data.error){
        return <p>Error: {data.error}</p>;
    }
    return(
        <div>
            <h1>About Page</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
```
The solution includes a loading state to improve the user experience while fetching data and error handling to gracefully manage potential issues during fetching.