import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeLanguage } from "../store/reducers/languageReducer";
import styles from "../styles/Home.module.css";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const content = useAppSelector((state) => state.language.content);
  const onChange = (e: string) => dispatch(changeLanguage(e));
  return (
    <div className={styles.navbar}>
      <select
        name="language"
        id="language"
        className={styles.select}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" selected disabled hidden>
          {content.selector.default}
        </option>
        <option value="spanish">{content.selector.option1}</option>
        <option value="english">{content.selector.option2}</option>
      </select>
    </div>
  );
};
export default Navbar;
