import React from "react";
import AuthForm from "./components/AuthForm";

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>
          Commit <span>Connect</span>
        </h1>
        <p>Connect with mentors. Level up your skills.</p>
      </div>
      <AuthForm />
      <footer>
        <p>&gt; Building the future of tech mentorship</p>
      </footer>
    </div>
  );
}

export default App;
