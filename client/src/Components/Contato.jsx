import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Blankpage from "./BlankPage";
import ContatoCard from "./ContatoCard";

function Contato() {
  return (
    <div className="ContatoContainer">
      <ContatoCard />

      <Footer />
    </div>
  );
}

export default Contato;
