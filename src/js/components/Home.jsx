import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [color, setColor] = useState("verde");

  return (
    <div className="text-center">
      <div
        style={{
          background: "#333",
          height: "600px",
          width: "220px",
          padding: "10px",
          borderRadius: "20px",
          margin: "0 auto",
        }}
        className="btn-group-vertical"
        role="group"
        aria-label="Vertical button group"
      >
        <button
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          type="button"
          className={
            color === "verde" ? "btn btn-success" : "btn btn-secondary"
          }
          onClick={() => setColor("verde")}
        >
          o
        </button>
        <button
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          type="button"
          className={
            color === "amarillo" ? "btn btn-warning" : "btn btn-secondary"
          }
          onClick={() => setColor("amarillo")}
        >
          o
        </button>
        <button
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          type="button"
          className={color === "rojo" ? "btn btn-danger" : "btn btn-secondary"}
          onClick={() => setColor("rojo")}
        >
          o
        </button>
      </div>
    </div>
  );
};

export default Home;
