import FMPage from "./FMPage/FMPage";
import GithubPage from "./GithubPage/GithubPage";
import InstagramPage from "./InstagramPage/InstagramPage";
import LinkedInPage from "./LinkedInPage/LinkedInPage";
import MainPage from "./MainPage/MainPage";
import TwitterPage from "./TwitterPage/TwitterPage";

function App() {
  return (
    <div className="wrapper">
      <MainPage />
      <GithubPage />
      <FMPage />
      <LinkedInPage />
      <TwitterPage />
      <InstagramPage />
    </div>
  );
}

export default App;
