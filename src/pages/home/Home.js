import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";
import "./Home.css";

export default function Home() {
  const { data, isPending, error } = useFetch(" http://localhost:3000/recipes");

  return (
    <div className="home">
      {isPending && <div className="error">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
