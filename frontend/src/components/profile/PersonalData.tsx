/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { GetPersonalData } from "../utils/getUserData";
import { HasToken } from "../utils/storage";
import { EditProfile, MainContentAsideLeft, MainSection } from "./Style";
import { useLocation, useNavigate } from "react-router-dom";
import { HandlePhoto } from "../photo/SendImage";

export function PersonalData() {
  const navigate = useNavigate();
  const location = useLocation();
  const states = location.state;
  const { user } = GetPersonalData();
  const { first_name, last_name, birth_day, age, phone, address, cep, city, state, id } = states ? states : user;

  const [sendPhoto, setSendPhoto] = useState(false);

  useEffect(() => {
    HasToken()
  }
  , [])
  const handleEditProfile = () => {
    navigate('/profile/edit', { state: user })
  }
  const toggleSendPhoto = () => {
    setSendPhoto(!sendPhoto)
  }
  return (
    <MainSection>
      <MainContentAsideLeft>
        <h3>Dados Pessoais</h3>
        <EditProfile onClick={ handleEditProfile } >Editar Perfil</EditProfile>
        <EditProfile onClick={ () => setSendPhoto(!sendPhoto) } >Enviar Foto</EditProfile>
        {user && (
          <div key={id}>
            <p><b>Nome completo:</b> {first_name} { last_name }.</p>
            <p><b>Data de nascimento:</b> {birth_day}.</p>
            <p><b>Idade:</b> { age } anos.</p>
            <p><b>Telefone:</b> {phone || <i>Não informado.</i>}</p>
            <p><b>Endereço:</b> {address || <i>Não informado.</i>}</p>
            <p><b>CEP:</b> {cep || <i>Não informado.</i>}</p>
            <p><b>Cidade:</b> {city || <i>Não informado.</i>}</p>
            <p><b>Estado:</b> {state || <i>Não informado.</i>}</p>
          </div>
        )}
      </MainContentAsideLeft>
      {sendPhoto && <HandlePhoto  toggleSendPhoto={ toggleSendPhoto } />}
    </MainSection>
  )
}