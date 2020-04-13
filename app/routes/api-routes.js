// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var character = require("../model/character.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all character) then provides JSON
  app.get("/api/:character", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.character) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the character here to run our searches)
      const findOne = await character.findOne({
        where: {name: req.params.character}
      })
      
      console.log(foundPug)
    }

    // Otherwise...
  //   else {
  //     // Otherwise display the data for all of the character.
  //     // (Note how we're using the character here to run our searches)
  //     const allCharacters = await character.findAll
      
  //     console.log(foundPug)
  //   }

  // });

  // // If a user sends data to add a new character...
  // app.post("/api/new", function(req, res) {

  //   // Take the request...
  //   var character = req.body;

  //   // Then send it to the character to "save" into the DB.
  //   character.addCharacter(character, function(data) {
  //     console.log(data);
  //   });

  });
};
