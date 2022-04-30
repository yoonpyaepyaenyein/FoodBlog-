import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer WW9mlyGbSUragwgwAajvO0-ANVmyMMv_gw5EhWyvHrNdvH-U6XCZVIbGwvRH6ib5DrXTEEpZMnMKCbl-ijR6CQxbQtVALPA03i0NULXNGx2z6L7_eY1BRMNS-rFmYnYx",
  },
});
