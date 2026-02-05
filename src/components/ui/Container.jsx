const Container = ({ children, className = "", ...props }) => {
  return (
    <>
      <div className={`container mx-auto px-5 md:px-8 ${className}`} {...props}>
        {children}
      </div>
    </>
  );
};

export default Container;
