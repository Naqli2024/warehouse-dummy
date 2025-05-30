import axios from "axios";

const getPurchaseIndent = axios.create({
  baseURL: "http://localhost:5001/api/purchase",
  headers: {
    "Content-Type": "application/json",
  },
});


export default getPurchaseIndent