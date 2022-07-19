import axios from "axios";

export const apiCall = axios.create({
  baseURL: "https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api",
  headers: {
    "x-api-key": "3Wiqgs9Nat3t551hgx1h81SD2gjGJfUnajJwS3EO ",
  },
});
