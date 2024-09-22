import logo from "../assets/logo.png";
function Logo() {
  return (
    <a href="/" className="max-w-fit cursor-pointer">
      <img src={logo} className="aspect-square w-12" />
    </a>
  );
}

export default Logo;
