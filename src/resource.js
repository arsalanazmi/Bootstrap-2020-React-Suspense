const fetchArsalanRepo = async () => {
  const MY_API_URL = "https://api.github.com/users/arsalanazmi/repos";
  const response = await fetch(MY_API_URL);
  const data = await response.json();
  return data;
};

const fetchInamRepo = async () => {
  const INAM_API_URL = "https://api.github.com/users/inamkhanpk/repos";
  const response = await fetch(INAM_API_URL);
  const data = await response.json();
  return data;
}

const wrapPromise = (promise) => {
  let status = "loading";
  let result;
  let suspender = promise.then(
    (data) => {
      status = "success";
      result = data;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      if (status === "loading") {
        throw suspender;
      } else if (status === "success") {
        return result;
      } else if (status === "error") {
        return result;
      }
    },
  };
};


const createResource = () => {
  return{
    arsalanRepos : wrapPromise(fetchArsalanRepo()),
    inamRepos : wrapPromise(fetchInamRepo()), 
  }
}
 
export default createResource;