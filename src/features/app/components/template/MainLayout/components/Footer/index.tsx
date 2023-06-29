// Components
import {
  OnPlayMusicControl,
  OnPlayMusicInfo,
  OnPlayMusicSetting,
} from "./components";

const Footer: React.FC = () => (
  <div className="app__footer">
    <div className="d-flex justify-between align-center h-full px-3">
      <OnPlayMusicInfo />
      <OnPlayMusicControl />
      <OnPlayMusicSetting />
    </div>
  </div>
);

export default Footer;
