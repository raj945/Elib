import React from "react";
import "./styles.css";

export default function Card(props) {
  return (
    <>
      <div className="Card">
        <div className="img">
          <img src={props.link} alt="Katherine Johnson" />
        </div>
        <div className="mainbox">
          <div className="Book">{props.Book}</div>
          <div className="box">
            <div className="author">{props.author}</div>
            <div className="read"> Read</div>
          </div>
        </div>
      </div>
    </>
  );
}
