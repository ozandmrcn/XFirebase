import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import PageLoader from "../../components/Loader/PageLoader";
import Post from "../../components/Post";

const List = () => {
  const [tweets, setTweets] = useState(null);
  useEffect(() => {
    // Reference of collection
    const collectionRef = collection(db, "tweets");

    // Queries
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    // Subscribe to the collection
    const unsub = onSnapshot(q, (docs) => {
      const temp = [];

      docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));

      setTweets(temp);
    });

    // Unsubscribe when unmount
    return () => unsub();
  }, []);

  return !tweets ? (
    <PageLoader />
  ) : (
    tweets.map((tweet) => <Post key={tweet.id} tweet={tweet} />)
  );
};

export default List;
