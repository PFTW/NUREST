var inquirer = require('inquirer');


console.log("Greetings, Welcome to Law Circuit 2015");

var questions = [
  {
    type: "confirm",
    name: "toAttendOnsite",
    message: "Will you be attending in person",
    default: false
  },
  {
    type: "input",
    name: "phone",
    message: "What's your phone number",
    validate: function( value ) {
      var pass = value.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
      if (pass) {
        return true;
      } else {
        return "Please enter a valid phone number";
      }
    }
  },
  {
    type: "list",
    name: "hotel",
    message: "What hotel will you stay at",
    choices: [ "Westin", "Marriot", "Hilton" ],
    filter: function( val ) { return val.toLowerCase(); }
  },
  {
    type: "input",
    name: "quantityUSB",
    message: "How many post-conference materials USB drives would you like",
    validate: function( value ) {
      var valid = !isNaN(parseFloat(value));
      return valid || "Please enter a number";
    },
    filter: Number
  },
  {
    type: "expand",
    name: "mugsConf",
    message: "What about conference mugs",
    choices: [
      {
        key: "c",
        name: "Law Circuit Car Mug",
        value: "CarMug"
      },
      {
        key: "t",
        name: "Tea Caraffe",
        value: "TeaCaraffe"
      },
      {
        key: "W",
        name: "Warming Thermos",
        value: "warmThermos"
      }
    ]
  },
  {
    type: "rawlist",
    name: "tshirst",
    message: "You also receive a free Law SChool colors T-Shirt",
    choices: [ "Navy", "Marroon", "Grey" ]
  },
  {
    type: "input",
    name: "comments",
    message: "Any comments from last year's conference",
    default: "Yes, more hotel buses, please!"
  },
  {
    type: "list",
    name: "gift",
    message: "For leaving us a note, you receive a gift",
    choices: [ "keychain", "wine opener" ],
    when: function( answers ) {
      return answers.comments !== "Yes, more hotel buses, please!";
    }
  }
];


inquirer.prompt( questions, function( answers ) {
  console.log("\nConference receipt:");
  console.log( JSON.stringify(answers, null, "  ") );
});
