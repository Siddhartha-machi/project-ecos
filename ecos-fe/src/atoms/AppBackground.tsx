const AppBackground = () => {
  return (
    <div className="stars">
      {[...Array(50)].map((_, index) => (
        <div className="star" key={"star" + index} />
      ))}
    </div>
  );
};

export default AppBackground;
