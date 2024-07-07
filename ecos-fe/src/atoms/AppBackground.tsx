import { Box } from "@mui/material";

const AppBackground = () => {
  const positions = [
    {
      top: -10,
      left: -20,
      background: "linear-gradient(135deg, #ff5b84, #eb3461)",
    },
    {
      bottom: 50,
      right: -50,
      background: "linear-gradient(130deg, green, yellow)",
    },
    // {
    //   bottom: "50%",
    //   left: "50%",
    //   background: "linear-gradient(135deg, green, gray)",
    // },
    // {
    //   bottom: "20%",
    //   left: "10%",
    //   background: "linear-gradient(135deg, #426cf8, #3ebdf0)",
    // },
    // {
    //   bottom: 100,
    //   right: 100,
    //   background: "linear-gradient(135deg, #426cf8, #3ebdf0)",
    // },
  ];

  return (
    // <div className="stars">
    //   {[...Array(50)].map((_, index) => (
    //     <div className="star" key={"star" + index} />
    //   ))}
    // </div>
    <>
      {positions.map((_, index) => (
        <Box key={`shape-${index}`} className={`shape${index + 1}`} />
      ))}
    </>
  );
};

export default AppBackground;
