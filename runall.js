
var runNewman = require('./mySrc/utils/Utils');

var rn = new runNewman();

/**
 * This will run all the collections one by one
 */
async function runme() {

  
  await rn.run("Register_Login");
  await rn.run("Film");
  await rn.run("Budget");
  await rn.run("AssignRemoveOrganizationToUser");
  await rn.run("ChangePassword");
  await rn.run("Education");
  await rn.run("FieldRegion");
  await rn.run("FieldZone");
  await rn.run("FileUpload");
  await rn.run("ForgotPassword");
  await rn.run("FundingAccount");
  await rn.run("Language");
  await rn.run("LiteracyMaterial");
  await rn.run("Location");
  await rn.run("Organization");
  await rn.run("Partner");
  await rn.run("Product");
  await rn.run("Story");
  await rn.run("Song");
  await rn.run("Unavailability");

  await rn.run("Partnership", false, true);
  // //   await rn.run("Partnership");
  await rn.run("Project", false, true);
  await rn.run("User");


  // TEMP
  // await rn.run("ZZZZZZZZZ Cord API v3", false, false);

}

runme();

// newman run Cord_API_V3_Project.postman_collection.json -e local.postman_environment.json -g MyWorkspace.postman_globals.json -r htmlextra-showOnlyFails --delay-request 1000
// --reporter-htmlextra-showOnlyFails
// https://stackoverflow.com/questions/38558989/node-js-heap-out-of-memory
// node --max-old-space-size=4096 yourFile.js
// node --max-old-space-size=8096 runall.js