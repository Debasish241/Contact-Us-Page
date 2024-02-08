import React from "react";
import styles from "./Navigation.module.css";

export default function Navbar() {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <ul className="flex justify-end flex-1 gap-x-4">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
