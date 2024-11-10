// eslint-disable-next-line react/prop-types
function MainContainer({ children }) {
  return (
    <div className="relative row-span-full mt-24 grid grid-cols-1 overflow-hidden sm:static sm:grid-cols-[1fr_3fr]">
      {children}
    </div>
  );
}

export default MainContainer;
