import React from 'react';
import './SidebarChannel.scss';
import { DocumentData } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../../features/channelSlice';

export type TChannelInfo = {
  id: string;
  channel: DocumentData;
};

const SidebarChannel = (props: TChannelInfo) => {
  const { id, channel } = props;
  const dispatch = useDispatch();

  return (
    <div
      className="sidebar-channel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channel.channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebar-channel__hash">#</span>
        {channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
