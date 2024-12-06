```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect use of setInterval.  The callback doesn't include a cleanup function.
    // This results in multiple timers running simultaneously, leading to unexpectedly fast counting.
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // 1 second interval
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```