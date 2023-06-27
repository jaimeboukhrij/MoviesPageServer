const { singup, login, verify } = require("../controllers/auth.controllers")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const router = require("express").Router()


router.post("/signup", singup)
router.post("/login", login)
router.get("/verify", isAuthenticated, verify)





module.exports = router