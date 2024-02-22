import React from 'react';

const Box = (props) => {
    return (
        <>
        <div className="box">
  <img src={props.src} alt="" />
  <div className="info">
    <a href="#" className="fas fa-download" />
    <div className="links">
      <a href="#" className="far fa-heart" />
      <a href="#" className="far fa-comment" />
      <a href="#" className="far fa-thumbs-up" />
    </div>
  </div>
</div>

        </>
    );
};

export default Box;