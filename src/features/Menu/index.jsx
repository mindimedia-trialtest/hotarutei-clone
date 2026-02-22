'use client'
import { useEffect, useState } from "react";
import Icon from "../../../public/assets/icons/icon1";
import axios from "axios";

const Menu = () => {
const [menus, setMenus] = useState([]);

  useEffect(() => {
    const getMenus = async() => {
      const res = await axios.get("/api/menus");
      const data = await res.data
      setMenus(data);
      console.log(data)
    }
    getMenus();
  }, []);
  return (
    <div className="py-10 px-16 md:flex lg:flex justify-between hidden bg-[#f8f8f6]">
      <div className="flex items-center gap-2">
        <Icon />
        <p className="text-md font-semibold">Scroll</p>
      </div>
      <div className="flex gap-4">
        {menus.map((item) => (
          <p key={item.id} className="font-serif">
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Menu;
