// Banner.js
import React, { memo } from 'react';
import './main.scss';

function Banner(props) {
  return (
  <>    
    <div className="Banner Container">
      <h1>{props.title}</h1>
      <ul>
        <li><a href="#">{props.link}</a></li>
        <li><a href="#">{props.link1}</a></li>
        <li><a href="#">{props.link2}</a></li>
        <li><a href="#">{props.link3}</a></li>
        <li><a href="#">{props.link4}</a></li>
        <li><a href="#">{props.link5}</a></li>
      </ul>
      <div className="cards" >
        {props.Data}
      </div>
    </div>

    <div className="MobilComputing Container" style={{ background: `URL(${props.rasm}) no-repeat center/cover `}}>
  <h2>{props.tit}</h2>
  <ul>
    <li><a href="#">{props.li1}</a></li>
    <li><a href="#">{props.li2}</a></li>
    <li><a href="#">{props.li3}</a></li>
    <li><a href="#">{props.li4}</a></li>
  </ul>
  <div className="MobilComputing-bt">
    <h1>{props.s24ultra}</h1>
    <p> {props.s24pi}</p>
    <button>{props.btn}</button>
  </div>
</div>

    </>
  );
}

export default memo(Banner);
