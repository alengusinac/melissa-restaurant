import openingHoursStyles from "../styles/OpeningHours.module.scss";

const OpeningHours = () => {
  return (
    <article className={openingHoursStyles.container}>
      <h3>Opening hours</h3>
      <span className={openingHoursStyles.inner_container}>
        <p>Mon-Sun</p>
        <p>18:00 - 24:00</p>
      </span>
    </article>
  );
};

export default OpeningHours;
