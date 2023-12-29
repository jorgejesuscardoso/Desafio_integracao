import { deletePost } from "../services/ApiFeedPost";

export const HandleDeletePost = async (id: number) => {
  try {
    const response = await deletePost(id);
    return response;
  } catch (error) {
    console.log(error);
  }
}