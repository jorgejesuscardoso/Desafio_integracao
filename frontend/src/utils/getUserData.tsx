import { useEffect, useState } from "react";
import { getPersonalData, getUser } from "../services/ApiGet";
import { GetId } from "./getId";

export function GetUserData() {
  const [user, setUser] = useState([]);
  const id = GetId();
  useEffect(() => {
    async function fetchUser() {
      const response = await getUser(id)
      setUser(response)
    }
    fetchUser()
  }, [id])
  return { user };
}
export const GetPersonalData = () => {
  const [user, setUser] = useState([]);  
  const id = GetId();
  useEffect(() => {
    async function fetchUser() {
      const response = await getPersonalData(id)
      setUser(response)
    }
    fetchUser()
  }, [id])
  return { user };
}