const URL = 'https://api.themoviedb.org/3/';
const KEY = 'a961e99727987689b5a0d0e9241df951&language=en-US&page=1';
const FILTER = 'trending/movie/day';

export async function fetchTrending() {
   const response = await fetch(`${URL}${FILTER}?api_key=${KEY}`);
   if (response.ok) {
    const data = await response.json();
  return data;
}}

export async function fetchMovie(id) {
    const response = await fetch(`${URL}movie/${id}?api_key=${KEY}`);
    if (response.ok) {
      const data = await response.json();
    return data;
  }}
   
 export async function fetchCast(id) {
  
      const response = await fetch(`${URL}movie/${id}/credits?api_key=${KEY}`);
      if (response.ok) {
        const data = await response.json();
      return data;
    }}
  
   export async function fetchReviews(id) {
        const response = await fetch(`${URL}movie/${id}/reviews?api_key=${KEY}`);
        if (response.ok) {
          const data = await response.json();
        return data;
      }} 


    export  async function fetchSearchMovie(query) {
          const response = await fetch(
            `${URL}/search/movie?api_key=${KEY}&query=${query}`
          );
          if (response.ok) {
            const data = await response.json();
          return data;
        } }
      



