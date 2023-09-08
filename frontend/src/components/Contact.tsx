import OpeningHours from "./OpeningHours";
import ContactInformation from "./ContactInformation";
import contactStyles from "../styles/Contact.module.scss";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const toBooking = () => {
    navigate("/search");
  };

  return (
    <section className={contactStyles.contact}>
      <h1>Contact</h1>
      <OpeningHours />
      <ContactInformation />
      <Button
        offset={false}
        onClick={toBooking}
        text="Book table"
        active={true}
      />
    </section>
  );
};

export default Contact;
