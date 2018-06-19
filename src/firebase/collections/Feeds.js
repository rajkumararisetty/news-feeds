import { db } from '../Initialize';

export const addFeed = async (postDetails) => {
  const addResponse = await db.collection("posts").add({
      ownerID: postDetails.ownerId,
      postText: postDetails.postText,
      ownerEmail: postDetails.ownerEmail,
      like: postDetails.like,
      createdTime: Date.now()
  });
  return addResponse;
}

export const getFeeds = async (limit, offset) => {
  try {
    const set = db.collection("posts").orderBy('createdTime', 'desc').limit(limit);
    return await set.get();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const updateFeeds = async (id, like) =>  {
  await db.collection("posts").doc(id).update({
      "like": like
  });
  return true;
}
