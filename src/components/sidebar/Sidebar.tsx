import { useEffect, useState } from 'react';
import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel, { TChannelInfo } from './sidebarChannel/SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import iconDiscord from '../../images/discordIcon.png';
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
import { onSnapshot, collection, query } from 'firebase/firestore';

const Sidebar = () => {
  const [channelInfos, setChannelInfos] = useState<TChannelInfo[]>([]);
  const user = useAppSelector((state) => state.user);

  const q = query(collection(db, 'channels'));
  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      setChannelInfos(
        querySnapshot.docs.map((channelDoc) => {
          return { id: channelDoc.id, channel: channelDoc.data() };
        })
      );
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__left">
        <div className="sever-icon">
          <img src={iconDiscord} alt="ロゴ" />
        </div>
        <div className="sever-icon">
          <img src={iconDiscord} alt="ロゴ" />
        </div>
      </div>
      <div className="sidebar__right">
        <div className="sidebar__right__top">
          <h3>discord</h3>
          <ExpandMoreIcon />
        </div>
        <div className="sidebar__right__channels">
          <div className="sidebar__right__channels__header">
            <div className="sidebar-header">
              <ExpandMoreIcon />
              <h4>チャンネル一覧</h4>
            </div>
            <AddIcon className="sidebar-add-icon" />
          </div>
          <div className="sidebar-channel-list">
            {channelInfos.map((channelInfo) => (
              <SidebarChannel
                key={`channel_${channelInfo.id}`}
                id={channelInfo.id}
                channel={channelInfo.channel}
              />
            ))}
          </div>
          <div className="sidebar__right__footer">
            <div className="sidebar__right__footer__account">
              <img src={user?.photo} alt="" onClick={() => auth.signOut()} />
              <div className="sidebar__right__footer__account__name">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>
            <div className="sidebar__right__footer__account__voice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
