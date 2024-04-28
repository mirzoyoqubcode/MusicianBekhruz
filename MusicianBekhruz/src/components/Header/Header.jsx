import React from "react";
import styles from "./Header.module.scss";
import header from "../../assets/header_crop.png";
import { FaSpotify } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { FaAngleRight } from "react-icons/fa6";
import news1 from "../../assets/news1.jpg";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";
import artist1 from "../../assets/artist_1.jpg";
import artist2 from "../../assets/artist_2.jpg";
import artist3 from "../../assets/artist_3.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className={styles.wrapper_header}>
        <img src={header} alt="" />
        <div className={styles.icons}>
          <button>
            Listen to my new album <FaAngleRight />
          </button>
          <div className={styles.wrapper_icons}>
            <FaSpotify className={styles.icon} />
            <FaApple className={styles.icon} />
            <FaYoutube className={styles.icon} />
            <SiApplemusic className={styles.icon} />
          </div>
        </div>
      </div>
      <h1 className={styles.name}>Bexruz Yunusov</h1>

      <div className={styles.news}>
        <article className={styles.news_article}>
          <img src={news1} alt="" />
          <div className={styles.caption}>
            <p>Daryo</p>
            <h4>Bexruz Yunusov ft Shavkat Umarov</h4>
          </div>
        </article>
        <article className={styles.news_article}>
          <img src={news2} alt="" />
          <div className={styles.caption}>
            <p>Daryo</p>
            <h4>Bexruz Yunusov ft Shavkat Umarov</h4>
          </div>
        </article>
        <article className={styles.news_article}>
          <img src={news3} alt="" />
          <div className={styles.caption}>
            <p>Daryo</p>
            <h4>Bexruz Yunusov ft Shavkat Umarov</h4>
          </div>
        </article>
      </div>
      <h1 className={styles.artist_title}>Artist</h1>
      <div className={styles.artist}>
        <article className={styles.artist_article}>
          <img src={artist1} alt="" />
          <div className={styles.caption_artist}>
            <p>Daryo</p>
            <h4>Bexruz Yunusov ft Shavkat Umarov</h4>
          </div>
        </article>
        <article className={styles.artist_article}>
          <img src={artist2} alt="" />
          <div className={styles.caption_artist}>
            <p>Sarbon</p>
            <h4>Bexruz Yunusov</h4>
          </div>
        </article>
        <article className={styles.artist_article}>
          <img src={artist3} alt="" />
          <div className={styles.caption_artist}>
            <p>Parvinamo</p>
            <h4>Bexruz Yunusov</h4>
          </div>
        </article>
      </div>
      <button className={styles.watch_more}>
        <Link to={"/"} className={styles.watch_more_link}>
          Watch More
        </Link>
      </button>
    </div>
  );
};

export default Header;
