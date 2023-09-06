import Button from "./Button";
import { useNavigate } from "react-router-dom";
import homeStyles from "../styles/Home.module.scss";

const Home = () => {
  const navigate = useNavigate();

  const toBooking = () => {
    navigate("/search");
  };

  return (
    <section className={homeStyles.home}>
      <Button
        offset={true}
        onClick={toBooking}
        text="Book table"
        active={true}
      ></Button>
      <article className={homeStyles.article}>
        <p className={homeStyles.description}>
          Melissa's Beachside Bistro is a tranquil oasis nestled along the
          sun-kissed shores of a pristine coastal haven. This charming
          beachfront restaurant beckons visitors with its laid-back ambiance and
          a promise of culinary delight. With a panoramic view of the cerulean
          sea stretching to the horizon, Melissa's creates an idyllic backdrop
          for unforgettable dining experiences.
          <br />
          <br />
          The soothing sound of waves crashing against the shoreline serves as a
          melodic accompaniment to the restaurant's diverse menu. Fresh, locally
          sourced ingredients are crafted into delectable dishes that celebrate
          the flavors of the sea. Melissa's signature seafood platters, laden
          with succulent lobster, plump shrimp, and delicate crab, are a
          highlight for seafood aficionados.
          <br />
          <br />
          As the sun dips below the horizon, Melissa's transforms into a
          romantic haven. Soft candlelight and the gentle sea breeze make it the
          perfect spot for a romantic dinner. The extensive wine list
          complements the cuisine, offering the perfect pairing for every
          palate.
          <br />
          <br />
          Melissa's Beachside Bistro is not just a restaurant; it's a
          destination for those seeking a slice of paradise on their plate.
          Whether you're savoring a leisurely lunch or a starlit dinner,
          Melissa's invites you to experience the magic of the beach, one
          delicious bite at a time.
        </p>
      </article>
    </section>
  );
};

export default Home;
