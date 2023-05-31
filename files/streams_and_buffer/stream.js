const fs = require("fs");

const readStream = fs.createReadStream("../../text/large-text.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("../../text/large-text2.txt");
const writeStream2 = fs.createWriteStream("../../text/large-text3.txt");

readStream.on("data", (chunk) => {
  console.log("---chunk------------------------");
  console.log(chunk);
  writeStream.write("\n========== NEW CHUNK ==========\n");
  writeStream.write(chunk);
});

// PIPING /*A shorter way*/
readStream.pipe(writeStream2);