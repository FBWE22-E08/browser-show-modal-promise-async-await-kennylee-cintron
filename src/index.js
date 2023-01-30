import "./css/style.css"; //importing css

const box = document.querySelector(".modal");

const thePromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("block");
    }, 60000);
  });
};

const resolvingBoxPromise = async () => {
  let result = await thePromise();
  box.style.display = result;
};

resolvingBoxPromise();
