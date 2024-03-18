import React from 'react';
import './SidebarChannel.scss';
import { DocumentData } from 'firebase/firestore';

export type TChannelInfo = {
  id: string;
  channel: DocumentData;
};

const SidebarChannel = (props: TChannelInfo) => {
  const { id, channel } = props;
  console.log(`🚀 ~ channel:`, channel);
  return (
    <div className="sidebar-channel">
      <h4>
        <span className="sidebar-channel__hash">#</span>
        {channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
