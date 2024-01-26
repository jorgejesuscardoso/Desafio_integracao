import { useEffect, useState } from "react";
import { getPersonalData, getUser } from "../services/ApiGet";
import { HasToken } from "./storage";

export function GetUserData() {
  const [user, setUser] = useState([]);
  const token = HasToken();
  useEffect(() => {
    async function fetchUser() {
      const response = await getUser(token)
      setUser(response)
    }
    fetchUser()
  }, [token])
  return { user };
}
export const GetPersonalData = () => {
  const [user, setUser] = useState({});  
  const id = HasToken();
  useEffect(() => {
    async function fetchUser() {
      const response = await getPersonalData(id)
      setUser(response)
    }
    fetchUser()
  }, [id])
  return { user };
}