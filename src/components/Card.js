function Card({ children }) {
  return (
    <div className="group  max-w-3xl  h-max   mt-[80px] container mx-auto bg-white rounded">
      {children}
    </div>
  );
}

export default Card;
