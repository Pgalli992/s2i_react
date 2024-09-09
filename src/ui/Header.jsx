// eslint-disable-next-line react/prop-types
function Header({ children }) {
  return (
    <div>
      <header className="bg-secondary-500 grid-cols-header grid p-5">
        {children}
      </header>
    </div>
  );
}

export default Header;
