import React from "react";
import Feature from "./components/Feature.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header";
import Hero from "./components/Hero.js";
import News from "./components/News.js";

function App(){
  return(
<div> 
  <Header></Header>
  <Hero></Hero>
  <Feature></Feature>
  <News></News>
  <Footer></Footer>
</div>
  )
}

export default App;