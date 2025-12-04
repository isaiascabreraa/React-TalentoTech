import { useState } from "react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  "action","rpg","soulslike","adventure","horror",
  "platformer","metroidvania","puzzle","shooter",
  "survival"
];

export default function Category() {
  const [open, setOpen] = useState(false);

  return (
    <div 
      className="category-dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="category-button">Categorías ▾</span>

      {open && (
        <ul className="dropdown-menu">
          {CATEGORIES.map(cat => (
            <li key={cat}>
              <Link to={`/category/${cat}`}>{cat}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
