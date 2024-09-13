import { useNavigate } from "react-router";

export function useGoToSearch() {
  const navigate = useNavigate();
  return () => navigate("/search_recipes");
}
