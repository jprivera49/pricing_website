const sql = require("./db.js");

// constructor
const Part = function(part) {
  this.part_numbers = part.part_numbers;
  this.price = part.price;
};

Part.getAll = result => {
  sql.query("SELECT part_numbers FROM part_numbers_price", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("parts: ", res);
    result(null, res);
  });
};

module.exports = Part;