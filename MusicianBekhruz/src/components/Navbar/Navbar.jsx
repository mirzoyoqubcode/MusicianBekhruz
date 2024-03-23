import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { HiOutlineMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <div className={styles.wrapper_nav}>
      <div className={styles.logo}>Behruz Yunusov</div>
      <ul className={styles.links}>
        <li>
          <Link className={styles.link}>Home</Link>
        </li>
        <li>
          <Link className={styles.link}>Music</Link>
        </li>
        <li>
          <Link className={styles.link}>Videos</Link>
        </li>
        <li>
          <Link className={styles.link}>About me</Link>
        </li>
        <li>
          <Link className={styles.link}>Contact</Link>
        </li>
      </ul>
      <div className={styles.mobile_nav_icon}>
        <HiOutlineMenu onClick={() => setShowNavMenu(!showNavMenu)} />
      </div>
      <div
        className={clsx({
          [styles.navMenu]: true,
          [styles.showMenu]: showNavMenu,
        })}
      >
        <AiFillCloseCircle
          className={styles.close_icon}
          onClick={() => setShowNavMenu(!showNavMenu)}
        />

        <ul className={styles.mobile_links}>
          <li>
            <Link className={styles.link}>Home</Link>
          </li>
          <li>
            <Link className={styles.link}>Music</Link>
          </li>
          <li>
            <Link className={styles.link}>Videos</Link>
          </li>
          <li>
            <Link className={styles.link}>About me</Link>
          </li>
          <li>
            <Link className={styles.link}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
