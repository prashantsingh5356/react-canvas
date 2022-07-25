import { useState } from "react";

import { Stage, Layer, Rect } from "react-konva";

const DUMMY_DATA = [
  {
    robot_id: Math.floor(Math.random() * 10),
    grid_number: Math.floor(Math.random() * 8) + 1,
    ststus: "active",
  },
  {
    robot_id: Math.floor(Math.random() * 10),
    grid_number: Math.floor(Math.random() * 8) + 1,
    ststus: "disabled",
  },
  {
    robot_id: Math.floor(Math.random() * 10),
    grid_number: Math.floor(Math.random() * 8) + 1,
    ststus: "",
  },
];

const Canva = () => {
  const [selectedId, setSelectedId] = useState("0");

  const highlightHandler = (e) => {
    console.log(e.target);
    //console.log(e.target.attrs.id);
    setSelectedId(e.target.attrs.id);
    console.log(e.target.attrs.id);
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          width: "600px",
          transform: "translate(2rem,2rem)",
        }}
      >
        <Stage
          width={200}
          height={200}

          //style={{ transform: "translateY(100px)" }}
        >
          <Layer>
            <Rect
              onClick={highlightHandler}
              width={200}
              height={200}
              fill={selectedId === "1" ? "black" : "grey"}
              id="1"
            ></Rect>
          </Layer>
        </Stage>
        <Stage
          width={200}
          height={200}
          //style={{ transform: "translateY(100px)" }}
        >
          <Layer>
            <Rect
              width={200}
              height={200}
              onClick={highlightHandler}
              fill={selectedId === "2" ? "black" : "red"}
              id="2"
            ></Rect>
          </Layer>
        </Stage>
        <Stage
          width={200}
          height={200}
          //style={{ transform: "translateY(100px)" }}
        >
          <Layer>
            <Rect
              width={200}
              height={200}
              onClick={highlightHandler}
              fill={selectedId === "3" ? "black" : "green"}
              id="3"
            ></Rect>
          </Layer>
        </Stage>
        <Stage
          width={200}
          height={200}
          //style={{ transform: "translateY(100px)" }}
        >
          <Layer>
            <Rect
              width={200}
              height={200}
              onClick={highlightHandler}
              fill={selectedId === "4" ? "black" : "yellow"}
              id="4"
            ></Rect>
          </Layer>
        </Stage>
        <Stage
          width={200}
          height={200}
          //style={{ transform: "translateY(100px)" }}
        >
          <Layer>
            <Rect
              width={200}
              height={200}
              onClick={highlightHandler}
              fill={selectedId === "5" ? "black" : "purple"}
              id="5"
            ></Rect>
          </Layer>
        </Stage>
        <Stage
          width={200}
          height={200}
          //style={{ transform: "translateY(100px)" }}
        >
          <Layer>
            <Rect
              width={200}
              height={200}
              onClick={highlightHandler}
              fill={selectedId === "6" ? "black" : "orange"}
              id="6"
            ></Rect>
          </Layer>
        </Stage>
        <Stage
          width={200}
          height={200}
          //style={{ transform: "translateY(100px)" }}
        >
          <Layer>
            <Rect
              width={200}
              height={200}
              onClick={highlightHandler}
              fill={selectedId === "7" ? "black" : "magenta"}
              id="7"
            ></Rect>
          </Layer>
        </Stage>
        <Stage
          width={200}
          height={200}
          //style={{ transform: "translateY(100px)" }}
        >
          <Layer>
            <Rect
              width={200}
              height={200}
              onClick={highlightHandler}
              fill={selectedId === "8" ? "black" : "blue"}
              id="8"
            ></Rect>
          </Layer>
        </Stage>
        <Stage
          width={200}
          height={200}
          //style={{ transform: "translateY(100px)" }}
        >
          <Layer>
            <Rect
              width={200}
              height={200}
              onClick={highlightHandler}
              fill={selectedId === "9" ? "black" : "pink"}
              id="9"
            ></Rect>
          </Layer>
        </Stage>
      </div>
    </>
  );
};

export default Canva;
