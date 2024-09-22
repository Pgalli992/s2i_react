import Logo from "../ui/Logo";
function Home() {
  return (
    <div className="col-span-full mx-auto flex w-2/5 flex-col items-center gap-3 pt-[15vh]">
      <Logo />
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary-800">
          Scopri il potere del cibo salutare con ricette vegane nutrienti e
          gustose
        </h1>
        <h2 className="text-2xl">
          Esplora e trova le migliori ricette vegane per un’alimentazione
          equilibrata e deliziosa. Inizia la tua ricerca di piatti che fanno
          bene al corpo e al pianeta!
        </h2>
      </div>
      <div className="mt-6"></div>
    </div>
  );
}

export default Home;
