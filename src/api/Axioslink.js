import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 1m2VxVjF7bwcYftJLFdAdpzN5Sa6i3RzOHbJNPgw2ds",
  },
});
