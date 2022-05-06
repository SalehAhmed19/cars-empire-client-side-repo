import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useMyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getMyItem = async () => {
      const email = user?.email;
      const url = `https://protected-lake-29761.herokuapp.com/my-items?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMyItems(data);
      } catch (error) {
        if (error) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getMyItem();
  }, [user]);
  return [myItems, setMyItems];
};
export default useMyItems;
