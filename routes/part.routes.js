module.exports = app => {
    const part_numbers_price = require("../controllers/part.controller.js");
  
    // Retrieve all part numbers
    app.get("/part_numbers_price", part_numbers_price.findAll);
  
  };