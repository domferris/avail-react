import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [available, setAvailable] = useState(false);

  return (
    <div>
      <h1>Map</h1>
      <button onClick={() => setAvailable(!available)}>Available</button>
      <p>{available.toString()}</p>
      <Link to="/schedule">
        <button>Schedule Hangout</button>
      </Link>
    </div>
  );
}

export default Home;
