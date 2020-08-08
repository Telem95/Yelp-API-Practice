import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 4koQW1tg_V_SyJ-r_5JolELymjqYNcI5yfJc1F8VqyfjeAM6UK9SYD9Gu8zMFCZB3dYQcveGgGemowQZnuFzIEl63hOYqJImTl7DmDYef-9a8W_MtAJjU9GckUopX3Yx",
  },
});
