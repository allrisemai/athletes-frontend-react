import AlthletItem from "../components/AlthletItem";
import PlayerItem from "../components/BasPlayerItem";
import { athletList, playerList } from "../constants/contentList";
import { imageList } from "../constants/imageList";
import "../styles/Home.scss";

function Home() {
  return (
    <div className="home">
      {/* ALTHLETS */}
      <div className="althlets">
        <div className="althlets__image" />
        <div className="group">
          <div className="title-header">
            <div className="space" />
            <h1 className="title-header__althlets">Althlets</h1>
          </div>
          {athletList.map((item) => (
            <AlthletItem
              title={item.title}
              description={item.description}
              backgroundColor={item.backgroundColor}
              textColor={item.textColor}
              id={item.id}
            />
          ))}
        </div>
      </div>
      {/* PLAYERS */}
      <div className="player">
        <div className="player__image" />
        <div className="group">
          <div className="title-header">
            <h1 className="title-header__player">Players</h1>
            <div className="space" />
          </div>
          {playerList.map((item) => (
            <PlayerItem
              title={item.title}
              description={item.description}
              backgroundColor={item.backgroundColor}
              textColor={item.textColor}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
