// eslint-disable-next-line react/prop-types
function MainContainer({ children }) {
  return (
    <div className="relative row-span-full mt-24 grid w-full grid-cols-1 overflow-hidden md:static md:grid-cols-[4fr_7fr] lg:grid-cols-[1fr_3fr]">
      {children}
    </div>
  );
}

export default MainContainer;
