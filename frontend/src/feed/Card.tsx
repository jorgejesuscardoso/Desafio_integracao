import { ProfilePhoto } from "../photo/ProfilePhoto"
import { Cards, ContentCard, HeaderCard } from "./style"
import { GetPersonalData } from "../utils/getUserData"
import { User } from "../types";

export const Card = () => {
  const { user } = GetPersonalData();
  const { first_name, last_name } = user as User;
  return (
    <Cards>
      <HeaderCard>
        <ProfilePhoto />
          <h3>{ first_name} { last_name }</h3>
          <p>Há 2 horas</p>
      </HeaderCard>
      <ContentCard>
        <p>Olá, mundo!</p>
        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi ea quas nulla earum sed libero id laudantium nemo harum!</h2>
        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi ea quas nulla earum sed libero id laudantium nemo harum!</h2>
        
      </ContentCard>

    </Cards>
  )
}