import { User } from "../types";
import { notPhotoIco } from "../utils/exports";
import { GetPersonalData } from "../utils/getUserData";
import { ProfilePic } from "./style";

export const ProfilePhoto = () => {
  const { user } = GetPersonalData();
  const { photo } = user as User;
  return (
    <div>      
      <ProfilePic src={ photo || notPhotoIco } alt="Foto de Perfil" />
    </div>
  )
}