var AWS = require("aws-sdk");
var epa = require("epa").getEnvironment();

// configure AWS
// -------------

module.exports = function(next){
  var awsCreds = epa.get("AWS_ACCESS_KEY_ID");

  if (!awsCreds){
    var credentials = new AWS.SharedIniFileCredentials({
      profile: "test-architecting-express"
    });

    AWS.config.credentials = credentials;
  };

  next();
};
