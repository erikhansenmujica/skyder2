import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { useAppSelector } from "../store/hooks";
import styles from "../styles/Home.module.css";
import audioStyles from "../styles/Audio.module.css";
import AppHead from "../components/AppHead";

const Home: NextPage = () => {
  const bgRef = useRef<any>();
  const content = useAppSelector((state) => state.language.content);
  useEffect(() => {
    setTimeout(() => {
      bgRef.current.play();
    }, 500);
  }, []);
  return (
    <div className={styles.container}>
      <AppHead />
      <video
        src="/fondo.mp4"
        ref={bgRef}
        className={styles.backgroundVideo}
        loop
        muted
      ></video>
      <Navbar />
      <br />
      <br />
      <main className={styles.main}>
        <div className={audioStyles.flexContainer}>
          <h1 className={audioStyles.subtitles}>{content.audio.firstBlock}</h1>
          <img
            className={audioStyles.images}
            src="/audioimage1.jpg"
            height={"270px"}
          ></img>
        </div>
        <div className={audioStyles.flexContainer}>
          <img
            className={audioStyles.images}
            src="/audioimage2.jpg"
            height={"270px"}
          ></img>
          <h1 className={audioStyles.subtitles}>{content.audio.secondBlock}</h1>
        </div>
        <div className={audioStyles.optionsFlexContainer}>
          <div className={audioStyles.optionsBoxes}>
            <h2>{content.audio.offers.first}</h2>
          </div>
          <div className={audioStyles.middleOptionsBox}>
            <h2>{content.audio.offers.second}</h2>
          </div>
          <div className={audioStyles.optionsBoxes}>
            <h2>{content.audio.offers.third}</h2>
          </div>
        </div>
        <a href="" className={audioStyles.linkToPreviousProj}>
          {content.audio.historicProjects}
        </a>
        <a
          href="https://www.linkedin.com/in/erik-hansen-488705180/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.credits}
        >
          {content.credits}
        </a>
      </main>
    </div>
  );
};

export default Home;
