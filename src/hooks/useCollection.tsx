import {
  query,
  collection,
  onSnapshot,
  Query,
  DocumentData,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { TChannelInfo } from '../components/sidebar/sidebarChannel/SidebarChannel';
import { db } from '../firebase';

type TProps = {
  queryName: string;
};

const useCollection = (props: TProps) => {
  const { queryName } = props;
  const [documents, setDocuments] = useState<TChannelInfo[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, queryName));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      setDocuments(
        querySnapshot.docs.map((channelDoc) => {
          return { id: channelDoc.id, channel: channelDoc.data() };
        })
      );
    });
  }, []);

  return documents;
};

export default useCollection;
