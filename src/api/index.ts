import { mapToArray } from "./../utils/mapToArray";
import { jsonPlaceholder } from "../utils/axios";
import { GetPosts } from "../types";

export const getPosts = async () => {
  try {
    const response = await jsonPlaceholder.get<GetPosts[]>("posts");
    return mapToArray(response.data);
  } catch (err) {
    throw new Error();
  }
};
