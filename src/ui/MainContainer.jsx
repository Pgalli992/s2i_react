// eslint-disable-next-line react/prop-types
function MainContainer({ children }) {
  return (
    <div className="row-span-full mt-24 grid grid-cols-[1fr_3fr] overflow-hidden">
      {children}
    </div>
  );
}

export default MainContainer;
