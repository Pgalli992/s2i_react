// eslint-disable-next-line react/prop-types
function MainContainer({ children }) {
  return (
    <div className="relative row-span-full mt-24 grid grid-cols-[1fr_3fr] gap-8 overflow-y-scroll">
      {children}
    </div>
  );
}

export default MainContainer;
