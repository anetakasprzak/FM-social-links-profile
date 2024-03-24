import { Link } from "react-router-dom";
import "./TwitterPage.css";

const TwitterPage = () => {
  return (
    <section className="twitter__page wrapper">
      <p className="page__text">Twitter Page</p>
      <Link to="/" className="back__text">
        <span className="back__text">&larr; go back</span>
      </Link>
    </section>
  );
};

export default TwitterPage;
