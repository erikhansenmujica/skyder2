import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { useAppSelector } from "../store/hooks";
import styles from "../styles/Home.module.css";
import audioStyles from "../styles/Audio.module.css";
import AppHead from "../components/AppHead";
import { FiInstagram } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import Link from "next/link";

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
        src="/fondoWeb.mp4"
        ref={bgRef}
        className={styles.backgroundVideo}
        loop
        muted
      ></video>
      <Navbar />
      <br />
      <br />
      <main className={audioStyles.main}>
        <div className={audioStyles.firstBlock}>
          <h1 className={audioStyles.subtitles}>{content.audio.firstBlock}</h1>
        </div>
        <div className={audioStyles.secondBlock}>
          <h1 className={audioStyles.subtitles}>{content.audio.secondBlock}</h1>
        </div>
        <div className={audioStyles.thirdBlock}>
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
          <div className={audioStyles.contactContainer}>
            <a className={audioStyles.contact}>{content.contact}</a>
            <div className={audioStyles.contactMethods}>
              <a
                href={"https://api.whatsapp.com/send?phone=542262632528"}
                target={"_blank"}
              >
                <div>
                  <a className={audioStyles.linkToPreviousProj}>Whatsapp</a>
                  <ImWhatsapp />
                </div>
              </a>
              <a
                href={"https://www.instagram.com/skyderbeatz"}
                target={"_blank"}
              >
                <div>
                  <a className={audioStyles.linkToPreviousProj}>Instagram</a>
                  <FiInstagram />
                </div>
              </a>
            </div>
          </div>
          <a href="" className={audioStyles.linkToPreviousProj}>
            {content.audio.historicProjects}
          </a>
        </div>
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
