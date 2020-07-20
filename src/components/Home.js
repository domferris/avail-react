import React, { useState } from "react";
import { Link } from "react-router-dom";
import Map from "./Map";

function Home() {
  const [available, setAvailable] = useState(false);

  return (
    <div>
      <Map />
      <button onClick={() => setAvailable(!available)}>Available</button>
      <p>{available.toString()}</p>
      <Link to="/schedule">
        <button>Schedule Hangout</button>
      </Link>
    </div>
  );
}

export default Home;
