import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useMyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    const getMyItem = async () => {
      const email = user?.email;
      const url = `https://protected-lake-29761.herokuapp.com/my-items?email=${email}`;
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    getMyItem();
  }, [user]);
  return [myItems, setMyItems];
};
export default useMyItems;
