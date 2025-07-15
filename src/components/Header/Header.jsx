import { Logo, Searchbar } from "../index.js";
import { useState } from "react";

function Header({ onMenuToggle }) {
  return (
    <div className=" flex flex-row w-[100%] h-18 justify-between px-4 items-center">
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
      {/* <div className=" border-l-1">
        <p className=" border-none rounded-[50%] bg-blue-500 text-white text-center px-3 py-2 text-[1rem] ">A</p>
      </div> */}
    </div>
  );
}

export default Header;
