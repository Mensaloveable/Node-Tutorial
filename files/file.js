const fs = require("fs");

//reading files
fs.readFile("../text/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// writing files
fs.writeFile("../text/blog.txt", "Mensa Loveable", () => {
  console.log("File written");
});

// directories
if (!fs.existsSync("./createdFromCode")) {
  fs.mkdir("createdFromCode", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folders created");
  });
}

// deleting folders
if (fs.existsSync("./removedFromCode")) {
  fs.rmdir("./removedFromCode", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// deleting files
if (fs.existsSync("../text/blog3.txt")) {
  fs.unlink("../text/blog3.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
