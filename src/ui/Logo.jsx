import logo from "../assets/icons/logo.png";
function Logo() {
  return (
    <a
      href="/"
      className="max-w-fit cursor-pointer justify-self-start md:col-span-1 md:justify-self-start"
    >
      <img src={logo} className="aspect-square w-10 md:w-12" />
    </a>
  );
}

export default Logo;
