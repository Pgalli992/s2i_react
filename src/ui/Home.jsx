import Logo from "./Logo";
function Home() {
  return (
    <div className="col-span-full mx-auto flex w-2/5 items-center justify-center">
      <Logo />
      <div className="text-center">
        <h1 className="text-primary-800 text-3xl font-bold">
          Scopri il potere del cibo salutare con ricette vegane nutrienti e
          gustose
        </h1>
        <h2 className="text-2xl">
          Esplora e trova le migliori ricette vegane per un’alimentazione
          equilibrata e deliziosa. Inizia la tua ricerca di piatti che fanno
          bene al corpo e al pianeta!
        </h2>
      </div>
    </div>
  );
}

export default Home;
