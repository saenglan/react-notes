import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    // console.log(event.target.value);
    setName(event.target.value);
  }

  function handleSubmitted(event) {
    setHeading(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleSubmitted}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button onClick={handleSubmitted}>Submit</button>
      </form>
    </div>
  );
}

export default App;
