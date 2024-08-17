import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        width: "fit-content",
      }}
    >
      <div>Current count : {count}</div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Remove</button>
      {!data.userId ? (
        <div>Loading data...</div>
      ) : (
        <div>
          <div>{data.title}</div>
        </div>
      )}
    </div>
  );
}

export default App;
