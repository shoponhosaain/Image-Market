import React from 'react';

const Footer = () => {
    return (
       <>
       <section className="footer">
  <div className="box-container">
    <div className="box">
      <h3>why choose us?</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ducimus
        vitae enim cum vero fugiat minima reprehenderit dolores eaque voluptate.
      </p>
    </div>
    <div className="box">
      <h3>quick links</h3>
      <a href="#">home</a>
      <a href="#">explore</a>
      <a href="#">licence</a>
      <a href="#">login</a>
    </div>
    <div className="box">
      <h3>newsletter</h3>
      <p>subscribe for latest updates</p>
      <form action="">
        <input type="email" placeholder="enter your email" />
        <button className="fas fa-paper-plane" />
      </form>
    </div>
  </div>
  <h1 className="credit">
    created by <a href="#">mr. web designer</a> | all rights reserved.
  </h1>
</section>


       </>
    );
};

export default Footer;