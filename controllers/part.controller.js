const part_numbers = require("../models/part.model.js");

// Retrieve all part numbers from the database.
exports.findAll = (req, res) => {
    part_numbers.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving part numbers."
        });
      else res.send(data);
    });
  };


