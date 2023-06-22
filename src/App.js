import "./styles.css";
import React from "react";
import Card from "./card";
import { Library } from "./data";
import Books from "./connect";

export default function App() {
  return (
    <>
      <div className="nav">
        <div className="title">Lib</div>
      </div>

      <div className="land"></div>
      <div className="body"></div>
      <Books />
    </>
  );
}
