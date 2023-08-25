import React from "react";
import Header from "./components/Header";
import Page from "./page/index";
import Footer from "./components/Footer";

const pages = ['about', 'portfolio', ]

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  );
}

export default App;
