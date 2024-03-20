import {
  query,
  collection,
  onSnapshot,
  Query,
  DocumentData,
  orderBy,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { TChannelInfo } from '../components/sidebar/sidebarChannel/SidebarChannel';
import { db } from '../firebase';
import { useAppSelector } from '../app/hooks';
import { TMessages } from '../Types';

type TProps = {
  collectionName: string;
  subCollectionName: string;
};

const useSubCollection = (props: TProps) => {
  const { collectionName, subCollectionName } = props;
  const channelId = useAppSelector((state) => state.channel.channelId);
  const [subDocuments, setSubDocuments] = useState<TMessages[]>([]);

  useEffect(() => {
    const collectionRef = collection(
      db,
      collectionName,
      String(channelId),
      subCollectionName
    );
    const collectionRefOrderBy = query(
      collectionRef,
      orderBy('timestamp', 'asc')
    );

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      const results: TMessages[] = snapshot.docs.map((doc) => {
        const docData = doc.data();
        return {
          timestamp: docData.timestamp,
          message: docData.message,
          user: docData.user,
        };
      });
      setSubDocuments(results);
    });
  }, [channelId]);
  return subDocuments;
};

export default useSubCollection;
