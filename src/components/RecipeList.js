import React from "react";
import Recipe from "./Recipe";
export default function RecipeList({ recipes, loading }) {
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (recipes.length < 1) {
    return (
      <h2 className="section-title">
        no recipess matched your search criteria
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">recipes</h2>
      <div className="cocktails-center">
        {recipes.map((item) => {
          return <Recipe key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
