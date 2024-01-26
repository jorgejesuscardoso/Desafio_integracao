/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { User } from "../../types";
import { notPhotoIco } from "../utils/exports";
import { GetPersonalData } from "../utils/getUserData";
import { ProfilePic } from "./style";

export const ProfilePhoto = (pic: any) => {
  const [getPhoto, setGetPhoto] = useState<any>(notPhotoIco);
  const { user } = GetPersonalData();
  const { photo } = user as User;
  useEffect(() => {
    if (pic.photo) {
      setGetPhoto(pic.photo);
    } else if (photo) {
      setGetPhoto(photo);
    }
  }, [pic, photo]);
  return (
    <div>      
      <ProfilePic src={ getPhoto } alt="Foto de Perfil" />
    </div>
  )
}