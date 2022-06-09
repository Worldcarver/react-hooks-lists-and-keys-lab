import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];


  const linkBar = links.map((link) => {
    return <a key={link} href ={`#${link}`}>{link}</a>
  })
  return <nav>{linkBar}</nav>;
}

export default NavBar;
