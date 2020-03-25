import React from "react";
import { Nav, NavItem } from "shards-react";

export default function NavBar() {
  return (
    <Nav justified style={{ color: "white" }}>
      <NavItem>
        <h3 style={{ color: "yellow" }}>Poke-Dex</h3>
      </NavItem>
    </Nav>
  );
}
