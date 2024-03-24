import { Link } from "react-router-dom";
import "./GithubPage.css";

function GithubPage() {
  return (
    <section className="github__page wrapper">
      <p className="page__text">GitHub Page</p>
      <Link to="/">
        <span className="back__text">&larr; go back</span>
      </Link>
    </section>
  );
}

export default GithubPage;
