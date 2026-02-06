const Heading = ({ h5 = "", h3 = "", align = "center" }) => {
  return (
    <>
      <div
        className={`space-y-4 font-semibold max-w-121.5 w-full mb-14 ${align === "center" ? "mx-auto text-center" : ""}`}
      >
        <h5
          className={`text-xl md:text-2xl flex items-center gap-3 py-0.5 ${align === "center" ? "justify-center" : ""}`}
        >
          {align !== "start" && <span className="w-10 h-1 bg-primary" />}
          <span className="text-primary uppercase">{h5}</span>
          <span className="w-10 h-1 bg-primary" />
        </h5>
        <h3 className="text-3xl md:text-4xl">{h3}</h3>
      </div>
    </>
  );
};

export default Heading;
