/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuCard, Cards, ContentCard, HeaderCard, DisplayMenuCard, TextAreaEditPost } from "./style"
import { TumbPost } from "../photo/TumbPosts";
import { useEffect, useState } from "react";
import { handleDate } from "../utils/date";
import { HandleDeletePost } from "../utils/deletPost";
import { updatePost } from "../services/ApiFeedPost";

export const Card = ({ post }: any) => {
  const [datePost, setDatePost] = useState('')
  const [editPost, setEditPost] = useState(false)
  const [edit, setEdit] = useState(false)
  const [editedPost, setEditedPost] = useState(post.content)

  useEffect(() => {
   const dateString = handleDate(post);
    setDatePost(dateString)
  }, [])
  const deletePost = () => {
    HandleDeletePost(post.post_id)
    window.location.reload();
  }
  const handleEditPost = () => {
    try {
    updatePost(post.post_id, editedPost);
    setEdit(!edit);
    setEditPost(!editPost);
    window.location.reload();
    } catch (error) {
      throw new Error("Erro ao editar post")
    }
  }
  const showMenuCard = () => {
    setEditPost(!editPost)
  }
  return (
    <Cards>
      <HeaderCard>
        <TumbPost
          photo={ post.photoUrl }
        />
        <h3>{ post.user_name} { post.last_name }</h3>
        <p>Publicado {datePost}</p>
        <MenuCard onClick={ showMenuCard }>...</MenuCard>
        { editPost ? ( 
          <DisplayMenuCard>
            <button onClick={ () => setEdit(!edit) }>Editar</button>
            <button onClick={ deletePost } >Deletar</button>
          </DisplayMenuCard>
          ) : ''}
        
      </HeaderCard>
      <ContentCard >
        <p>{ post.content }</p>{ edit ? (
          <TextAreaEditPost>
            <input
              type="text"
              value={ editedPost }
              onChange={ (e) => setEditedPost(e.target.value) }
            />
            <div>
              <button onClick={ handleEditPost }>Salvar</button>
              <button onClick={ () => {
                setEdit(!edit);
                setEditPost(!editPost);
                } }>Cancelar</button>
            </div>
          </TextAreaEditPost>
        ) : ''}
      </ContentCard>
    </Cards>
  )
}