import React from "react";
import styles from "./Footer.module.scss";
import zortv from "../../assets/zortv.png";
const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_wrapper_content}>
        <img src={zortv} alt="" />
        <div>
          <p>Location:</p>
          <h4>Республика Узбекистан, г. Ташкент, ул. Элбек, д.8</h4>
        </div>
        <div>
          <h3>Contact info:</h3>
          <p>Email: info@singersho.com </p>
          <p>Telephone number: +998 99 999 99 99 </p>
          <p>Telephone number: +998 99 999 99 99 </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
