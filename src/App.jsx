import React from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Features from "./Components/Features";
import Working from "./Components/Working";
import ChooseUs from "./Components/ChooseUs";
import Questions from "./Components/Questions";
import Footer from "./Components/Footer";

let App=()=>{
  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <Features></Features>
      <Working></Working>
      <ChooseUs></ChooseUs>
      <Questions></Questions>
      <Footer></Footer>
    </div>
  );
}

export default App;
