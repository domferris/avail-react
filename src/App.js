import React from "react";
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import Calendar from "./components/Calendar";
import Friends from "./components/Friends";
import Settings from "./components/Settings";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/schedule" component={Schedule} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/friends" component={Friends} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </BrowserRouter>

      {/* TODO render Nav */}
    </main>
  );
}

export default App;
