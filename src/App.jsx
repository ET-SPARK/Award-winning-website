import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
}

export default App;
