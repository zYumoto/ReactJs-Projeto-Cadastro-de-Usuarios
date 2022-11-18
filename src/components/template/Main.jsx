import "./Main.css";
import React from "react";
import Header from "./Header";
export default (props) => {
  return (
    <>
      <Header {...props} />
      <main className="content">Conteudo</main>
    </>
  );