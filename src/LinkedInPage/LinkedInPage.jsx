import { Link } from "react-router-dom";
import "./LinkedInPage.css";

const LinkedInPage = () => {
  return (
    <section className="linkedIn__page wrapper">
      <p className="page__text">LinkedIn Page</p>
      <Link to="/" className="back__text">
        <span className="back__text" style={{ color: "#000" }}>
          &larr; go back
        </span>
      </Link>
    </section>
  );
};

export default LinkedInPage;
