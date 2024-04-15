// import logo from './logo.svg';
import "./App.css";
import React, { useState, useEffect } from "react";
import ItemsComponent from "./components/ItemsComponent";
import CreateItemComponent from "./components/CreateItemComponent";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getItems() {
    const response = await fetch("http://localhost:4000");
    const items = await response.json();
    setIsLoading(false);
    setItems(items);
  }

  useEffect(() => {
    getItems().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>CRUD APP</h1>
      <CreateItemComponent setItems={setItems} getItems={getItems} />
      <ItemsComponent
        items={items}
        setItems={setItems}
        isLoading={isLoading}
        getItems={getItems}
      />
    </div>
  );
}

export default App;
