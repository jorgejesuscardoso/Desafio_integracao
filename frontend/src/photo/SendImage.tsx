import { useState } from 'react';
import { HasToken } from '../utils/storage';
import { HandleSendBanner, HandleSendPhoto } from '../services/ApiPost';
import { FormSendImg, Main } from './style';

export const HandlePhoto = () => {
  const [photo, setPhoto] = useState<File>();
  const [banner, setBanner] = useState<File>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files ) {
      setPhoto(files[0]);
    }
  }
  
  const handlePhoto = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = HasToken();
    try {
      if (photo) {
        const formData = new FormData();
        formData.append('id', `${id}`);
        formData.append('photo', photo);
        const response = await HandleSendPhoto(formData);
        console.log(response);
      } else {
        console.log("Nenhuma foto selecionada.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files ) {
      setBanner(files[0]);
    }
  }

  const handleBanner = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = HasToken();
    try {
      if (banner) {
        const formData = new FormData();
        formData.append('id', `${id}`);
        formData.append('banner', banner);
        const response = await HandleSendBanner(formData);
        console.log(response);
      } else {
        console.log("Nenhuma foto selecionada.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      <h1>Enviar Foto</h1>
      <FormSendImg action="" method="POST" encType="multipart/form-data" onSubmit={ (e) => handlePhoto(e) }>
        <label htmlFor="file"><b>Foto de perfil:</b></label>
        <br />
        <input type="file" id="file" name='photo' onChange={ handleFileChange }  />
        <button type="submit">Enviar</button>
      </FormSendImg>

      <FormSendImg action="" method="POST" encType="multipart/form-data" onSubmit={ (e) => handleBanner(e) }>
        <label htmlFor="file"><b>Escolher Banner:</b></label>
        <br />
        <input type="file" id="file" name='banner' onChange={ handleBannerChange } />
        <button type="submit">Enviar</button>
      </FormSendImg>
    </Main>
  );
}