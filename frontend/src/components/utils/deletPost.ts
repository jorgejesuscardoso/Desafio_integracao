import { deletePost } from "../services/ApiFeedPost";

export const HandleDeletePost = async () => {
  try {
    const response = await deletePost();
    return response;
  } catch (error) {
    console.log(error);
  }
}