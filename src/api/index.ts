import { jsonPlaceholder } from "../utils/axios";
import { GetPosts } from "../types";

export const mapToArray = (object: GetPosts[]) => {
  const array = [];
  const mockNames = [
    "joao",
    "maria",
    "jose",
    "carla",
    "jaqueline",
    "patri",
    "sara",
    "pablo",
    "grasi",
    "tiago",
  ];
  for (const elem in object) {
    array.push({
      ...object[elem],
      name: mockNames[object[elem].userId],
      role: "developer",
    });
  }
  return array;
};

export const getPosts = async () => {
  try {
    const response = await jsonPlaceholder.get<GetPosts[]>("posts");
    return mapToArray(response.data);
  } catch (err) {
    throw new Error();
  }
};
