import Slider from "react-slick";
import AlthletItem from "../components/AthleteItem";
import PlayerItem from "../components/PlayerItem";
import { athleteList, playerList } from "../constants/contentList";
import "../styles/Home.scss";
import useWindowDimensions from "../utils/WindowDImension";

function Home() {
  const { height, width } = useWindowDimensions();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="home">
      {/* ALTHLETS */}
      <div className="home__althlets">
        <div className="home__image home__image--atletes desktop" />
        <div className="home__group">
          <div className="title-header">
            <div className="space" />
            <h1 className="title-header__althlets">Athletes</h1>
          </div>
          <div className="home__image-container home__image-container--atletes">
            <div className="home__image home__image--atletes mobile" />
          </div>
          {width > 640 ? (
            athleteList.map((item) => (
              <AlthletItem
                title={item.title}
                description={item.description}
                backgroundColor={item.backgroundColor}
                textColor={item.textColor}
                id={item.id}
              />
            ))
          ) : (
            <Slider {...settings}>
              {athleteList.map((item) => (
                <AlthletItem
                  title={item.title}
                  description={item.description}
                  backgroundColor="#F5F4F9"
                  textColor="#000000"
                  id={item.id}
                />
              ))}
            </Slider>
          )}
        </div>
      </div>
      {/* PLAYERS */}
      <div className="home__player">
        <div className="home__image home__image--player desktop" />
        <div className="home__group">
          <div className="title-header">
            <h1 className="title-header__player">Players</h1>
            <div className="space" />
          </div>
          <div className="home__image-container home__image-container--player">
            <div className="home__image home__image--player mobile" />
          </div>

          {width > 640 ? (
            playerList.map((item) => (
              <PlayerItem
                title={item.title}
                description={item.description}
                backgroundColor={item.backgroundColor}
                textColor={item.textColor}
                titleTextColor={item.titleTextColor}
                id={item.id}
              />
            ))
          ) : (
            <Slider {...settings}>
              {playerList.map((item) => (
                <PlayerItem
                  title={item.title}
                  description={item.description}
                  backgroundColor="#F5F4F9"
                  textColor="#000000"
                  titleTextColor={item.titleTextColor}
                  id={item.id}
                />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
