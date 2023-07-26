const City = require("./City");
const Continent = require("./Continent");
const Country = require("./Country");

//City -> countryId
Country.hasMany(City) //countryId
City.belongsTo(Country)

//Country -> continentId
Continent.hasMany(Country)  //continentId
Country.belongsTo(Continent)