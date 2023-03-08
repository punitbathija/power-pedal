const stripe = require("stripe")(process.env.STRIPESECRETKEY);
console.log(stripe);
