import React from "react";
import img from "../assets/images/home-bg.jpg"
const Hero = () => {
  return (
    <>
      <section className="home" style={{background:"url("+img+")no-repeat"}}>
        <h1>stunning royalty free stock photos</h1>
        <form action="" style={{ marginTop: "5rem" }}>
          <input type="search" id="home-search" placeholder="search images" />
          <label htmlFor="home-search" className="fas fa-search" />
        </form>
        <ul className="suggestion" style={{ marginTop: "2rem" }}>
          <li>suggestions : </li>
          <li>nature</li>
          <li />
          <li>man</li>
          <li>corporate</li>
          <li>city</li>
          <li>more...</li>
        </ul>
      </section>
    </>
  );
};

export default Hero;
