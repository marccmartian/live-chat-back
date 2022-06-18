const { Router } = require("express");
const { addMessage, getMessages } = require("../controller/messages");

const router = Router();

router.post("/", addMessage);
router.get("/:from/:to", getMessages);

module.exports = router;
