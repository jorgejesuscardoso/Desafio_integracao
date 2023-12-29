/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendIcon } from "../utils/exports";
import { Icons } from "./Icons";
import { ContentFeed } from "./ContentFeed";
import { IcoContent, Main, SectionTextArea, SendIcon, TextArea } from "./style";
import { HasToken } from "../utils/storage";
import { useState } from "react";
import { sendPost } from "../services/ApiFeedPost";
import { useDispatch } from "react-redux";
import { newPostAction } from "../redux/actions/newPostAction";

export const Feed = () => {
  const dispatch = useDispatch()
  const id = HasToken()
  const [posts, setPosts] = useState('')

  const handlePost = () => {
    sendPost(posts, id)
    dispatch(newPostAction())
  }
  return (
    <Main>
      <SectionTextArea>
        <Icons />
        <TextArea
          placeholder="O que você está pensando?"
          onChange={ (e) => setPosts(e.target.value) }
        >
        </TextArea>
        <IcoContent>
        <button
          onClick={ handlePost }
        >
          <SendIcon src={ sendIcon } alt="Enviar" />
        </button>
        </IcoContent>
      </SectionTextArea>
      <ContentFeed />
    </Main>
  )
};