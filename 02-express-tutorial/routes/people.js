const express = require("express");
let { people } = require("../data");

//create router instance
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// -GET Method
// router.get("/", getPeople);

// -POST method
// router.post("/", createPerson);

// router.post("/postman", createPersonPostman);

// -PUT method is for editing data - need to have a route params
// router.put("/:id", updatePerson);

// - delete method
// router.delete("/:id", deletePerson);

///can also use-
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
