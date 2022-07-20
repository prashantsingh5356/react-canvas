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
  //   (function loggingData() {
  //     DUMMY_DATA.map((robot) => {
  //       console.log(robot.grid_number);
  //     });
  //   })();

  return (
    <>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            x={20}
            y={50}
            width={600}
            height={600}
            shadowBlur={10}
            fill="red"
          ></Rect>
          <Rect
            x={20}
            y={50}
            width={200}
            height={200}
            fill="magenta"
            box-number="1"
          ></Rect>
          <Rect x={220} y={50} width={200} height={200} fill="blue"></Rect>
          <Rect x={420} y={50} width={200} height={200} fill="green"></Rect>
          <Rect x={20} y={250} width={200} height={200} fill="yellow"></Rect>
          <Rect x={220} y={250} width={200} height={200} fill="orange"></Rect>
          <Rect x={420} y={250} width={200} height={200} fill="black"></Rect>
          <Rect x={20} y={450} width={200} height={200} fill="#B2C8DF"></Rect>
          <Rect x={220} y={450} width={200} height={200} fill="#513252"></Rect>
          <Rect x={420} y={450} width={200} height={200} fill="#003865"></Rect>
        </Layer>
      </Stage>
    </>
  );
};

export default Canva;
