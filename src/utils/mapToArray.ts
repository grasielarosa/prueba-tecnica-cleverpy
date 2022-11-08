import { GetPosts, Posts } from "../types";

export const mapToArray = (object: GetPosts[]) => {
  const array: Posts[] = [];
  const mockNames = [
    ["Maria Carmen", "https://i.pravatar.cc/100?img=48"],
    ["Antonio", "https://i.pravatar.cc/100?img=64"],
    ["Ana Maria", "https://i.pravatar.cc/100?img=44"],
    ["Manuel", "https://i.pravatar.cc/100?img=66"],
    ["Josefa", "https://i.pravatar.cc/100?img=38"],
    ["José", "https://i.pravatar.cc/100?img=60"],
    ["Sara", "https://i.pravatar.cc/100?img=35"],
    ["Francisco", "https://i.pravatar.cc/100?img=58"],
    ["Pilar", "https://i.pravatar.cc/100?img=30"],
    ["David", "https://i.pravatar.cc/100?img=51"],
  ];
  for (const elem in object) {
    array.push({
      ...object[elem],
      name: mockNames[object[elem].userId - 1][0],
      avatar: mockNames[object[elem].userId - 1][1],
      role: "developer",
    });
  }
  return array;
};
