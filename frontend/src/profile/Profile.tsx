/* eslint-disable @typescript-eslint/no-explicit-any */

import { PersonaData } from "./PersonalData";
import { UserData } from "./UserData";

export function Profile() {
 return (
   <div>
    <h1>Perfil</h1>
    <UserData />
    <PersonaData />
   </div>
 )
}