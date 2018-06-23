import { db } from '../Initialize';
import { queryConfig } from '../../constants/Firebase';

export const addFeed = async (postDetails) => {
  const createdTime = Date.now();
  const addResponse = await db.collection("posts").add({
      ownerID: postDetails.ownerId,
      postText: postDetails.postText,
      ownerEmail: postDetails.ownerEmail,
      like: postDetails.like,
      createdTime: createdTime
  });

  return {addResponse, createdTime};
};

export const getFeeds = async (nextFeeds='') => {
  try {
    let set = db.collection("posts").orderBy('createdTime', 'desc').limit(queryConfig.feedsListingLimit);
    if (nextFeeds) {
      set=nextFeeds;
    }
    const documents = await set.get();
    const docsLength = documents.docs.length;
    let next = false;
    if (docsLength === queryConfig.feedsListingLimit) {
      const lastVisible = documents.docs[docsLength-1];
      next = db.collection("posts").orderBy('createdTime', 'desc').startAfter(lastVisible).limit(queryConfig.feedsListingLimit);
    }

    return {documents, next};
  } catch (error) {
    throw error;
  }
};

export const updateFeeds = async (id, like) =>  {
  await db.collection("posts").doc(id).update({
      "like": like
  });
  return true;
};
