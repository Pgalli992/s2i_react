import logo from "../assets/icons/logo.png";
function Logo() {
  return (
    <a
      href="/"
      className="max-w-fit cursor-pointer justify-self-start sm:col-span-1 sm:justify-self-start"
    >
      <img src={logo} className="aspect-square w-10 sm:w-12" />
    </a>
  );
}

export default Logo;
