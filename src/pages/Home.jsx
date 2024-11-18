import Logo from "../ui/Logo";
function Home() {
  return (
    <div className="col-span-full mx-auto flex w-2/3 flex-col items-center gap-3 pt-[15vh] md:w-2/5">
      <Logo />
      <div className="text-center">
        <h1 className="text-2xl font-bold text-primary-800 sm:text-3xl">
          Unlock the power of healthy eating with nutritious and delicious vegan
          recipes
        </h1>
        <h2 className="text-xl md:text-2xl">
          Explore and discover the best plant-based dishes for a balanced and
          flavorful diet. Start your journey toward meals that are good for both
          your body and the planet!
        </h2>
      </div>
      <div className="mt-6"></div>
    </div>
  );
}

export default Home;
