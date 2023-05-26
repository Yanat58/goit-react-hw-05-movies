const URL = 'https://api.themoviedb.org/3/';
const KEY = 'a961e99727987689b5a0d0e9241df951&language=en-US';

async function fetchMovie(id) {
  try {
    const response = await fetch(`${URL}movie/${id}?api_key=${KEY}&page=1`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchMovie;
