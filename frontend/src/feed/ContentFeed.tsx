/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { Card } from "../Cards/Card"
import { Feed, SectionPost } from "./style"
import { HasToken } from "../utils/storage"
import { getPosts } from "../services/ApiFeedPost"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

export const ContentFeed = () => {
  const location = useLocation();
  const { state } = location;
  const sentNewPost = useSelector((state: any) => state.newPost);
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const path = window.location.pathname.split('/')
    let id: number;
    if (path[1] === 'profile' && !state) {
      id = HasToken()
    } else {
      id = +path[2];
    }
    async function fetchPost() {
     const posts = await getPosts(id)
    setPosts(posts)
    }
    fetchPost()
  }, [])

  useEffect(() => {
    if (sentNewPost === true) {
    window.location.reload()
    }
  }, [sentNewPost])
  return (
    <Feed>
    <SectionPost>        
      {posts && posts
        .sort((a: any, b: any) => {
          const dateA: any = new Date(a.created_at);
          const dateB: any = new Date(b.created_at);
          return dateB - dateA;
        })
        .map((post: any) => (
          <div key={post.post_id}>
            <Card
              post={post}
            />
          </div>
        ))}
    </SectionPost>
  </Feed>
  )
}