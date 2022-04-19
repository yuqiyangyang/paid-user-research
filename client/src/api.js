import axios from "axios";

export async function signupUser(payload) {
  try {
    const { data: resp } = await axios.post("http://localhost:8000/signup", {
      email: payload.email,
      name: payload.name,
      password: payload.password,
    });
    return resp.data;
  } catch (err) {
    console.error(err);
    if (err.response) {
      throw err.response.data;
    }
  }
}

export async function loginUser(payload) {
  try {
    const { data: resp } = await axios.post("http://localhost:8000/login", {
      email: payload.email,
      password: payload.password,
    });
    return resp.data;
  } catch (err) {
    console.error(err);
    if (err.response) {
      throw err.response.data;
    }
  }
}

export async function getAllPosts() {
  try {
    const { data: resp } = await axios.get("http://localhost:8000/posts");
    return resp.data;
  } catch (err) {
    console.error(err);
    if (err.response) {
      throw err.response.data;
    }
  }
}

export async function getPost(postId) {
  try {
    const { data: resp } = await axios.get(
      `http://localhost:8000/posts/${postId}`
    );
    return resp.data;
  } catch (err) {
    console.error(err);
    if (err.response) {
      throw err.response.data;
    }
  }
}

export async function createPost(payload) {
  try {
    const { data: resp } = await axios.post("http://localhost:8000/posts", {
      title: payload.title,
      description: payload.description,
      price: payload.price,
      imgSrc: payload.imgSrc,
      date: payload.date,
    });
    return resp.data;
  } catch (err) {
    console.error(err);
    if (err.response) {
      throw err.response.data;
    }
  }
}

export async function joinPost(postId, userId) {
  try {
    const { data: resp } = await axios.post(
      `http://localhost:8000/posts/${postId}/join`,
      { userId }
    );
    return resp.data;
  } catch (err) {
    console.error(err);
    if (err.response) {
      throw err.response.data;
    }
  }
}

export async function searchPhotos(queryString) {
  try {
    const { data: resp } = await axios.get(
      `http://localhost:8000/photos/search?q=${queryString}`
    );
    return resp.data;
  } catch (err) {
    console.error(err);
    if (err.response) {
      throw err.response.data;
    }
  }
}
