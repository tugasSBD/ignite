const apiKey = `1ee4a05288b548539ab63c46a51c7ab2`;
const base_url = "https://api.rawg.io/api";

//Mengambil tanggal Hari ini
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `/games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=${apiKey}`;
// console.log(popular_games);
const upcoming_games = `/games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=${apiKey}`;
const new_games = `/games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=${apiKey}`;

console.log(`${base_url}${new_games}`);

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

export const gameDetailsURL = (game_id) =>
  `${base_url}/games/${game_id}?key=${apiKey}`;

export const gamesScreenshootURL = (game_id) =>
  `${base_url}/games/${game_id}/screenshots?key=${apiKey}`;

export const searchGameURL = (game_name) =>
  `${base_url}/games?search=${game_name}&page_size=9&key=${apiKey}`;
