import { storeUserInfo } from "@/services/auth.service";
import { useEffect, useState } from "react";

const useToken = (email: string) => {
  const [token, setToken] = useState("");

  // console.log(email);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/api/v1/auth/login/?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.data?.accessToken) {
            // console.log("useToken", data?.data?.accessToken);
            storeUserInfo({ accessToken: data?.data?.accessToken });
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
