import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  const email = user?.user?.email;
  useEffect(() => {
    const token = async () => {
      if (email) {
        const { data } = await axios.post(
          "https://protected-lake-29761.herokuapp.com/login",
          { email }
        );
        console.log(data);
        setToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
      }
    };
    token();
  }, [user]);
  return [token, setToken];
};
export default useToken;
