import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
//styles
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingrdientInput = useRef(null);
  const { postData, data, error } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      method,
      cookingTime: cookingTime + "minutes",
      ingredients,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = ingredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients([...ingredients, ing]);
    }
    setIngredient("");
    ingrdientInput.current.focus();
  };

  useEffect(() => {
    if (data) {
      setTitle("");
      setMethod("");
      setCookingTime("");
      setIngredients([]);
      history.push("/");
    }
  }, [data]);
  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setIngredient(e.target.value)}
              value={ingredient}
              ref={ingrdientInput}
            ></input>
            <button onClick={handleAdd} className="btn">
              Add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:{" "}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <label>
          <span>Recipe Method:</span>
          <input
            type="text"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking Time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn"> Submit </button>
      </form>
    </div>
  );
}
