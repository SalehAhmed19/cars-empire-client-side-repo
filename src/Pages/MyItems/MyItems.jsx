import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    const getMyItem = async () => {
      const email = user?.email;
      console.log(email);
      const url = `https://protected-lake-29761.herokuapp.com/my-items?email=${email}`;
      console.log(url);
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    getMyItem();
  }, [user]);
  return (
    <div>
      <h2>My Items</h2>
      <div>
        <ul>
          {myItems.map((item) => (
            <li key={item._id} item={item}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyItems;
