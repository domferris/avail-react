import React, { useState } from "react";

function Home() {
  const [available, setAvailable] = useState(false);

  return (
    <div>
      <h1>Map</h1>
      <button onClick={() => setAvailable(!available)}>Available</button>
      <p>{available.toString()}</p>
      <button>Schedule Hangout</button>
    </div>
  );
}

export default Home;
