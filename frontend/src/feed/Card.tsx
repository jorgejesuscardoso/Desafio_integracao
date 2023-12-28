/* eslint-disable @typescript-eslint/no-explicit-any */
import { Cards, ContentCard, HeaderCard } from "./style"
import { useEffect, useState } from "react";
import { getPosts } from "../services/ApiHandlePosts";
import { TumbPost } from "../photo/TumbPosts";
import { HasToken } from "../utils/storage";

export const Card = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const path = window.location.pathname.split('/')
    let id: number;
    if (path[1] === 'profile') {
      id = HasToken()
    } else {
      id = 0
    }
    async function fetchPost() {
     const posts = await getPosts(id)
    setPosts(posts)
    }
    fetchPost()
  }, [])
  return (
    <Cards>
      { posts && posts.map((post: any) => (
        <div key={ post.post_id }>
          <HeaderCard>
            <TumbPost
              photo={ post.photoUrl }
            />
            <h3>{ post.user_name} { post.last_name }</h3>
            <p>Há 2 horas</p>
          </HeaderCard>

          <ContentCard >
            <p>{ post.content }</p>
          </ContentCard>
        </div>
      )
        
        )
      }
    </Cards>
  )
}