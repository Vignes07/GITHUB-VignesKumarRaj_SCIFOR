import { useState, useEffect } from "react";

export default function Categories({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const retryFetch = async (retries = 3, delay = 1000) => {
        try {
          const response = await fetch("https://opentdb.com/api_category.php");
          if (response.status === 429 && retries > 0) {
            await new Promise((resolve) => setTimeout(resolve, delay));
            return retryFetch(retries - 1, delay * 2);
          }
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setCategories(data.trivia_categories);
          setLoading(false);
        } catch (e) {
          setError("Failed to load categories. Please try again later.");
          setLoading(false);
        }
      };

      await retryFetch();
    };

    fetchCategories();
  }, []);

  if (loading) return <div className="loading">Loading categories...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h1>Select a Category</h1>
      <div className="grid categories">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className="btn"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
