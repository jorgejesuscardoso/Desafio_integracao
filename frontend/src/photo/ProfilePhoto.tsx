/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { User } from "../types";
import { notPhotoIco } from "../utils/exports";
import { GetPersonalData } from "../utils/getUserData";
import { HasToken } from "../utils/storage";
import { ProfilePic } from "./style";

export const ProfilePhoto = (photos: any) => {
  const { user } = GetPersonalData();
  const { photo } = user as User;
  const [profilePhoto, setProfilePhoto] = useState('');

  useEffect(() => {
    const location = window.location.pathname.split('/');
    const token = HasToken();
    console.log(location[2])
    if (+location[2] !== token) {
      setProfilePhoto(photos.photo);
    } else {
      setProfilePhoto(photo);
    }
  },[])
  return (
    <div>      
      <ProfilePic src={ profilePhoto || notPhotoIco } alt="Foto de Perfil" />
    </div>
  )
}