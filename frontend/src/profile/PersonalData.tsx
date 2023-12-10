/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { GetPersonalData } from "../utils/getUserData";
import { HasToken } from "../utils/storage";

export function PersonaData() {
  const { user } = GetPersonalData();

  useEffect(() => {
    HasToken()
  }
  , [])

  return (
    <div>
      <h3>Dados Pessoais</h3>
      {user && user.map((item: any) => (
        <div key={item.id}>
          <p><b>Nome completo:</b> {item.first_name} { item.last_name }.</p>
          <p><b>Data de nascimento:</b> {item.birth_day}.</p>
          <p><b>Idade:</b> { item.age } anos.</p>
          <p><b>Telefone:</b> {item.phone || <i>Não informado.</i>}</p>
          <p><b>Endereço:</b> {item.address || <i>Não informado.</i>}</p>
          <p><b>CEP:</b> {item.cep || <i>Não informado.</i>}</p>
          <p><b>Cidade:</b> {item.city || <i>Não informado.</i>}</p>
          <p><b>Estado:</b> {item.state || <i>Não informado.</i>}</p>
        </div>
          ))}
    </div>
  )
}