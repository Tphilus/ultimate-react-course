/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

const formartDate = (date) =>
  new Intl.DateTimeFormat("en", {
    date: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

// eslint-disable-next-line react/prop-types
export default function CityItem({ city }) {
  // eslint-disable-next-line react/prop-types
  const { cityName, emoji, date, id, position } = city;
  console.log(position);

  return (
    <li>
      <Link
        className={StyleSheet.cityItem}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}> {emoji} </span>
        <h3 className={styles.name}> {cityName} </h3>
        <time className={styles.date}> ({formartDate(date)}) </time>
        <button className={styles.deleteBtn}> &times; </button>
      </Link>
    </li>
  );
}
