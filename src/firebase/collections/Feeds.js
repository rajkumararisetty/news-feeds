import { db } from '../Initialize';

export const addFeed = async (postDetails) => {
  try {
    const addResponse = await db.collection("posts").add({
        ownerID: postDetails.ownerId,
        postText: postDetails.postText,
        ownerEmail: postDetails.ownerEmail,
        like: postDetails.like,
        createdTime: Date.now()
    });
    return addResponse;
  } catch(error) {
    throw error;
  }
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
