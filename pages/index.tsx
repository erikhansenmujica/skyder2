import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AppHead from "../components/AppHead";
import Navbar from "../components/Navbar";
import { useAppSelector } from "../store/hooks";
import styles from "../styles/Home.module.css";
const Home: NextPage = () => {
  const videoButtonRef = useRef<any>();
  const bgRef = useRef<any>();
  const audiotButtonRef = useRef<any>();
  const content = useAppSelector((state) => state.language.content);
  useEffect(() => {
    setTimeout(() => {
      videoButtonRef.current.play();
      bgRef.current.play();
      audiotButtonRef.current.play();
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
      <main className={styles.main}>
        <Navbar />
        <img src="/skyder.png" height={"100px"} className={styles.logo}></img>
        <h1 className={styles.title}>SKYDER</h1>
        <p className={styles.subTitle}>{content.subtitle}</p>
        <div className={styles.videosContainer}>
          <Link href={"/audio"}>
            <video
              src="/BotonAudio.mov"
              ref={audiotButtonRef}
              loop
              muted
              className={styles.card}
            ></video>
          </Link>
          <Link href={"/video"}>
            <video
              src="/BotonVideo.mov"
              ref={videoButtonRef}
              loop
              muted
              className={styles.card}
            ></video>
          </Link>
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
