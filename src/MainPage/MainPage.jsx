import { socialLinks, userData } from "../data";

const { image, name, city, country, skills } = userData;

const MainPage = () => {
  return (
    <main className="main__page">
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
          return <button key={id}>{link}</button>;
        })}
      </div>
    </main>
  );
};

export default MainPage;
