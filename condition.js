const myPromise = new Promise(function (resolve, reject) {
  const name = "Ardhi";

  if (name === "Ardhi") {
    resolve();
  } else {
    reject();
  }
});

myPromise
  .then(function () {
    console.log("Nama saya benar");
  })
  .catch(function () {
    console.log("Nama saya tidak benar");
  })
  .finally(function () {
    console.log("System promise itu telah selesai membaca variable nama");
  });
