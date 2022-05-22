function makeRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function Hello() {
  const response = await makeRequest("google");

  console.log(response);
}

Hello();
console.log("1");
