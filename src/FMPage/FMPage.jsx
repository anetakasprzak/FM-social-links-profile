import { Link } from "react-router-dom";
import "./FMPage.css";

function FMPage() {
  return (
    <section className="FM__page wrapper">
      <p className="page__text">Frontend Mentor Page</p>
      <Link to="/">
        <span className="back__text">&larr; go back</span>
      </Link>
    </section>
  );
}

export default FMPage;
