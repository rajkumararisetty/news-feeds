import { db } from '../Initialize';

export const addFeed = async (postDetails) => {
  try {
    const addResponse = await db.collection("posts").add({
        ownerID: postDetails.ownerId,
        postText: postDetails.postText,
        ownerEmail: postDetails.owner,
        like: postDetails.like
    });
    return addResponse;
  } catch(error) {
    throw error;
  }
}
