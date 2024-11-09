// eslint-disable-next-line react/prop-types
function MainContainer({ children }) {
  return (
    <div className="relative row-span-full mt-24 flex overflow-hidden sm:static sm:grid sm:grid-cols-[1fr_3fr]">
      {children}
    </div>
  );
}

export default MainContainer;
