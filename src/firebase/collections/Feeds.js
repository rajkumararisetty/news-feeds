import db from '../Initialize';

export const addPost = async (postDetails) => {
  try {
    const addResponse = await db.collection("posts").add({
        postId: '123',
        ownerID: 'Rajkumar',
        postText: 'Jioooo',
        ownerName: 'Sachin',
        like: '100000'
    });

    return addResponse;
  } catch(error) {
    throw error;
  }
}
