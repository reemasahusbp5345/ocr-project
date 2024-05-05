const Tesseract = require("tesseract.js");
const { createObjectCsvWriter } = require("csv-writer");

// Path to the image file
const imagePath = "input_page-0004.jpg";

// Perform OCR on the image
Tesseract.recognize(
  imagePath,
  "eng", // English language
  { logger: (m) => console.log(m) } // Enable logging
)
  .then(({ data: { text } }) => {
    // Extract necessary fields from OCR text to Json
    const records = extractTextToJson(text);

    // data to CSV file
    const csvWriter = createObjectCsvWriter({
      path: "output.csv",
      header: [
        { id: "name", title: "Name" },
        { id: "husbandName", title: "Husband Name/Fathers Name" },
        { id: "houseNumber", title: "House Number" },
        { id: "age", title: "Age" },
        { id: "gender", title: "Gender" },
      ],
    });

    csvWriter
      .writeRecords(records)
      .then(() => {
        console.log("CSV file has been written successfully");
      })
      .catch((err) => {
        console.error("Error writing CSV file:", err);
      });
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

const extractTextToJson = (text) => {
  const splittedText = text.trim().split("\n");
  let data = [];
  const loop = [1, 2, 3];
  for (let i = 3; i < splittedText.length - 1; i += 6) {
    const name = splittedText[i].split(
      /Mama :|Marre :|Marne :|Mame :|Mame |Name :|Mama |Name |Marna : /
    );
    const husbandName = splittedText[i + 1].split(
      /Husbands Mame:|Fathers Nama:|Husbands Mame!|Fathers Mame:|Fathers Name:|Husbands Narme:|Fathars Nama:|Fathers Mama:|Mothers Name:/g
    );
    const houseNumber = splittedText[i + 2].split(
      /House Mumber + |House Number : |House Number = |House Mumber |Houses Number |House Number |Hougs Number : /
    );
    const gender = splittedText[i + 3].match(/Female|Male/g);
    const age = splittedText[i + 3].match(/\b\d+\b/g);

    loop.map((item) => {
      let obj = {
        name: name?.[item],
        husbandName: husbandName?.[item],
        houseNumber: houseNumber?.[item],
        gender: gender?.[item - 1],
        age: age?.[item - 1],
      };
      data.push(obj);
    });
  }
  return data;
};
