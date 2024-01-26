import { notPhotoIco } from "../utils/exports"
import { ProfilePic } from "./style"
type TumbPostProps = {
  photo: string
}
export const TumbPost = ({ photo }: TumbPostProps) => {
  const tumbs = photo.includes('undefined') ? notPhotoIco : photo
  return (
    <div>      
      <ProfilePic src={ tumbs } alt="Foto de Perfil" />
    </div>
  )
}
