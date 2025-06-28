import { Logo, Searchbar } from "../index.js";
import { useState } from "react";

function Header({ onMenuToggle }) {
  return (
    <div className=" flex flex-row w-[100%] h-18 justify-around items-center">
      <div className="md:hidden">
        <button onClick={onMenuToggle} className="text-[1.2rem]">
          &#9776;
        </button>
      </div>
      <div>
        <Logo />
      </div>
      <div>
        <Searchbar />
      </div>
    </div>
  );
}

export default Header;
