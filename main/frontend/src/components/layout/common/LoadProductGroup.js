import axios from "axios";

const LoadProductGroup = (name, setData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      groupName: name,
    },
  };

  axios
    .get("/api/product-group/", config)
    .then((res) => {
      console.log(`Load product group ${name} succeded!`);
      setData(res.data.products);
    })
    .catch((err) => {
      console.log(`Load product group ${name} failed!`);
      console.log(err.response.data, err.response.status);
      setData(null);
    });
};

export default LoadProductGroup;
