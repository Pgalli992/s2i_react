import { useRouteError } from "react-router-dom";
import Button from "../ui/Button";
import { useMoveBack } from "../hooks/useMoveBack";
// import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();
  const moveBack = useMoveBack();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 text-center text-3xl">
      <div>
        <h1>Something went wrong 😢</h1>
        <p>{error.data || error.message}</p>
      </div>
      <Button text="Go Back" onClick={moveBack} />

      {/* <LinkButton to="-1">&larr; Go back</LinkButton> */}
    </div>
  );
}

export default Error;
