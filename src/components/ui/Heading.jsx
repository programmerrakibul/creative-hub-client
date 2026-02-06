import clsx from "clsx";

const Heading = ({ h5 = "", h3 = "", align = "center" }) => {
  return (
    <>
      <div
        className={clsx("space-y-3 font-semibold max-w-121.5 w-full mb-14", {
          "mx-auto text-center": align === "center",
        })}
      >
        <h5
          className={clsx(
            "text-xl md:text-2xl flex items-center gap-3 py-0.5 ",
            {
              "justify-center": align === "center",
            },
          )}
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
