import { useNavigate } from "react-router-dom";

// funtion that allow to return to the preavious page
export function useMoveBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
