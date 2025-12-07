
import './Category.css'
import { useState } from "react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  "Action","Rpg","Soulslike","Adventure","Horror",
  "Platformer","Metroidvania","Puzzle","Shooter",
  "Survival"
];

export default function Category() {
  const [open, setOpen] = useState(false);

  return (
    <div className="category-dropdown" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      
      <span> Categorías ▾ </span>

      {open && (
        <div className="dropdown-menu">
          <ul className="dropdown-list">
            {CATEGORIES.map(cat => (
              <li key={cat}>
                <Link to={`/category/${cat}`}>{cat}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
