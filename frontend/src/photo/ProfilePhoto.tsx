/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "../types";
import { notPhotoIco } from "../utils/exports";
import { GetPersonalData } from "../utils/getUserData";
import { ProfilePic } from "./style";

export const ProfilePhoto = (photos: any) => {
  const { user } = GetPersonalData();
  const { photo } = user as User;
  const profilePhoto = photos.photo ? photos.photo : photo;
  console.log(photos)
  return (
    <div>      
      <ProfilePic src={ profilePhoto || notPhotoIco } alt="Foto de Perfil" />
    </div>
  )
}