import { notPhotoIco } from "../utils/exports"
import { ProfilePic } from "./style"
type TumbPostProps = {
  photo: string
}
export const TumbPost = ({ photo }: TumbPostProps) => {
  
  return (
    <div>      
      <ProfilePic src={ photo || notPhotoIco } alt="Foto de Perfil" />
    </div>
  )
}
