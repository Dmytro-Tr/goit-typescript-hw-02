import axios from "axios";

export const fetchArticles = async (query, page) => {
  const { data } = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: "XZStRBfACQP-q-kCXR0IJai0mE6pvomLOZZrclZrEPM",
      query,
      page,
      per_page: 12,
    },
  });
  console.log(data.results);
  return data.results;
};
