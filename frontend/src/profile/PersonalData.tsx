/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { GetPersonalData } from "../utils/getUserData";
import { HasToken } from "../utils/storage";
import { MainContentAsideLeft, MainSection } from "./Style";
import { HandlePhoto } from "../photo/SendImage";
import { useLocation } from "react-router-dom";

export function PersonalData() {
  const path = window.location.pathname.split('/profile/')
  const location = useLocation();
  const states = location.state;
  const { user } = GetPersonalData();
  const { first_name, last_name, birth_day, age, phone, address, cep, city, state, id } = states ? states : user;
  useEffect(() => {
    HasToken()
  }
  , [])

  return (
    <MainSection>
      <MainContentAsideLeft>
        <h3>Dados Pessoais</h3>
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
      { path[0] === '/profile' && <HandlePhoto /> }
    </MainSection>
  )
}