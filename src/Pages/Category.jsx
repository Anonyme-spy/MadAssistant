// src/Pages/Category.jsx
import Category_Card from "../composer/Card2.jsx";
import category from "../json/category.json";
import { Route, Routes } from "react-router-dom";
import { Polices } from "./page/Polices.jsx";

export default function Category() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {Object.keys(category).map((key) => (
        <Category_Card
          key={key}
          title={category[key].title}
          p={category[key].p}
          icon={category[key].i}
          link={category[key].link}
        />
      ))}
      <Routes>
      </Routes>
    </div>
  );
}