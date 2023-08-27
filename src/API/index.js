const API_URL = 'https://strangers-things.herokuapp.com/api/2302-acc-et-web-pt-a'

export async function fetchUserPosts() {
  try {
    const response = await fetch(
      `${API_URL}/posts`
    );
    const result = await response.json();
    console.log(result)
  } catch (err) {
    console.error(err);
  }
}