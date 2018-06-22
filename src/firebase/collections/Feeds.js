import { db } from '../Initialize';

export const addFeed = async (postDetails) => {
  return await db.collection("posts").add({
      ownerID: postDetails.ownerId,
      postText: postDetails.postText,
      ownerEmail: postDetails.ownerEmail,
      like: postDetails.like,
      createdTime: Date.now()
  });
};

export const getFeeds = async (next='') => {
  try {
    let set = db.collection("posts").orderBy('createdTime', 'desc').limit(5);
    if (next) {
      set=next;
    }
    const documents = await set.get();
    const lastVisible = documents.docs[documents.docs.length-1];
    const next = db.collection("posts").orderBy('createdTime', 'desc').startAfter(lastVisible).limit(5);
    return {documents, next}
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateFeeds = async (id, like) =>  {
  await db.collection("posts").doc(id).update({
      "like": like
  });
  return true;
};
