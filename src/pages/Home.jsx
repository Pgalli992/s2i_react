import { useGoToSearch } from "../hooks/useGoToSearch";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
function Home() {
  const goToSearch = useGoToSearch();

  return (
    <div className="col-span-full mx-auto flex h-screen w-2/5 -translate-y-40 flex-col items-center justify-center">
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
      <div className="mt-6">
        <Button text="Inizia a cercare..." onClick={goToSearch} />
      </div>
    </div>
  );
}

export default Home;
