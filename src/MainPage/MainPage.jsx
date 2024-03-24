import { socialLinks, userData } from "../data";
import { Link } from "react-router-dom";
import "./MainPage.css";

const { image, name, city, country, skills } = userData;

const MainPage = () => {
  return (
    <main className="main__page wrapper">
      <div className="user">
        <img src={image} alt="user image" className="user__image" />
        <p className="user__name">{name}</p>
        <p className="user__location">
          {city}, {country}
        </p>
        <p className="text">{skills}</p>
      </div>

      <div className="links__box">
        {socialLinks.map(({ id, link }) => {
          return (
            <Link key={id} to={`${link.toLowerCase()}`}>
              <button key={id} className={`btn btn--${id}`}>
                {link}
              </button>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default MainPage;
