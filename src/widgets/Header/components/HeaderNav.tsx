import { useState } from "react";

const navItems = [
  { id: "home", label: "Главное" },
  { id: "shop", label: "Магазин" },
  { id: "me", label: "Моё" },
  { id: "Projects", label: "Проекты" },
  { id: "contacts", label: "Контакты" },
  { id: "search", icon: "" },
];


export default function HeaderNav() {
  const [active, setActive] = useState("shop");

  return (
    <nav className="justify-self-center">
      <ul className="flex gap-8 text-sm text-gray-400">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`relative cursor-pointer transition-colors duration-200
              ${active === item.id ? "text-white" : "hover:text-white"}
            `}
          >
            {item.label}

            {active === item.id && (
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-orange-500" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}