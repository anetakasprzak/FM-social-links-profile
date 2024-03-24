import { Link } from "react-router-dom";
import "./InstagramPage.css";

const InstagramPage = () => {
  return (
    <section className="instagram__page wrapper">
      <p className="page__text">Instagram Page</p>
      <Link to="/">
        <span className="back__text">&larr; go back</span>
      </Link>
    </section>
  );
};

export default InstagramPage;
