import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Plans from "../../components/Plans";

export default function page() {
  return (
    <>
      <Navbar />
      <main>
        <Plans />
      </main>
      <Footer />
    </>
  );
}
