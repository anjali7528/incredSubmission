import React, { useState } from "react";
import SearchBar from "./Search";
import LoginDialog from "./LoginDialog";

function Header() {
  return (
    <div className="flex place-content-evenly py-3 border-b px-2 flex-col md:flex-row md:items-center ">
      <img
        className="size-fit"
        src="https://logos-world.net/wp-content/uploads/2023/10/logos-world.net_3.png"
        alt="grow_icon"
      />
      <div className="flex place-content-between md:w-1/2">
        <SearchBar className="w-7/12 text-sm font-small rounded-lg focus-visible:ring-0 " />
        <LoginDialog/>
      </div>
      
    </div>
  );
}

export default Header;
