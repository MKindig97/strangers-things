const API_URL = 'https://strangers-things.herokuapp.com/api/2302-acc-et-web-pt-a'

export async function fetchUserPosts() {
  try {
    const response = await fetch(
      `${API_URL}/posts`
    );
    const result = await response.json();
    return result.data.posts
  } catch (err) {
    console.error(err);
  }
}
export async function fetchPostById(id) {
  try {
    const response = await fetch(
      `${API_URL}/posts/${id}`
    );
    const result = await response.json();
    return result.data.post;
  } catch (err) {
    console.error(err);
  }
}

export async function createNewPost(post) {
  try {
    const response = await fetch(
      `${API_URL}/posts`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

export async function deletePost(id) {
  await fetch(`${API_URL}/posts/${id}`, {
  method: 'DELETE',
});
}