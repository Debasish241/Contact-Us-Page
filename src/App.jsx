import React from "react";
import Navbar from "./components/Navigation/Navbar";
import "./App.css";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";
import Button from "./components/Button/Button";
export default function App() {
  return (
    <div>
      <Navbar />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}
