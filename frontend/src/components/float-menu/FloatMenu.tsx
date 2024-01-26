import { useState } from "react";
import { Lis, Logout, Menusettings, NavBar } from "./style"
import { deleteAccount } from "../services/ApiGet";
import { HasToken } from "../utils/storage";

export const FloatMenu = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  const handleDeleteAccount = async () => {
    try {
      const id = HasToken();
      await deleteAccount(id, 1);     
      setTimeout(async () => {
        await deleteAccount(id);
        handleLogout();
      }, 100);
  
    } catch (error) {
      console.error('Erro ao excluir a conta ou fazer logout:', error);
    }
  };
  
  return (
    <NavBar>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><button onClick={ () => setShowSettings(!showSettings) }><a href="#Settings">Settings</a></button></li>
        <Lis><Logout onClick={ handleLogout } >Logout</Logout></Lis>
      </ul>
      { showSettings && <Menusettings><button onClick={ () => setConfirmDelete(!confirmDelete) } >Deletar Conta</button></Menusettings>}
      { confirmDelete 
        && (
          <Menusettings>
            <p>
              Tem certeza que deseja proseguir com a deleção? Não tem volta!
            </p>
            <button onClick={ handleDeleteAccount } >Confirmar</button>
          </Menusettings>
        )}
    </NavBar>
  )
}
