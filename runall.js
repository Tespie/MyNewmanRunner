
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
  await rn.run("Project", false, true);
  await rn.run("User");


}

runme();
