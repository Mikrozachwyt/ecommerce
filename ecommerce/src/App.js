
import React from "react";
import ProductList from "./components/ProductList";
import FilterBar from "./components/FilterBar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Vape Shop</h1>
        <FilterBar />
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
