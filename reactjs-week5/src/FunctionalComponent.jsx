import React, { useState } from "react";

export default function CounterFunctional() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Increase
      </button>
    </div>
  );
}
