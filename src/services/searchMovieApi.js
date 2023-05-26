const URL = 'https://api.themoviedb.org/3/';
const KEY = 'a961e99727987689b5a0d0e9241df951';

async function fetchSearchMovie(query, page) {
  try {
    const response = await fetch(
      `${URL}/search/movie?api_key=${KEY}&query=${query}&page=${page}&language=en-US`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchSearchMovie;
