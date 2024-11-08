import logo from "../assets/icons/logo.png";
function Logo() {
  return (
    <a
      href="/"
      className="col-span-2 col-start-1 max-w-fit cursor-pointer justify-self-center sm:col-span-1 sm:justify-self-start"
    >
      <img src={logo} className="aspect-square w-8 sm:w-12" />
    </a>
  );
}

export default Logo;
