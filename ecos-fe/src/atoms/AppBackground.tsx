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
      {positions.map((position) => (
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "50px",
            // borderRadius: "50%",
            bgcolor: "green",
            ...position,
            "background-image":
              "radial-gradient(circle at center center, #ffffff, #1868a0), repeating-radial-gradient(circle at center center, #ffffff, #ca4675, 38px, transparent 76px, transparent 38px)",

            "background-blend-mode": "multiply",
            "background-color": "#1868a0",
          }}
        />
      ))}
    </>
  );
};

export default AppBackground;
