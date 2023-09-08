import contactInformationStyles from "../styles/ContactInformation.module.scss";

const ContactInformation = () => {
  return (
    <article className={contactInformationStyles.container}>
      <h3>Contact information</h3>
      <div className={contactInformationStyles.inner_container}>
        <span className={contactInformationStyles.information}>
          <p>Call us</p>
          <p>0654 - 456 258</p>
        </span>
        <span className={contactInformationStyles.information}>
          <p>Email us</p>
          <p>info@melissa.com</p>
        </span>
        <span className={contactInformationStyles.information}>
          <p>Visit</p>
          <span className={contactInformationStyles.address}>
            <p>Ocean road 27</p>
            <p>245 14 Lison</p>
          </span>
        </span>
      </div>
    </article>
  );
};

export default ContactInformation;
