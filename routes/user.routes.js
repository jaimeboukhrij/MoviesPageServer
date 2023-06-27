const { getUserWatchlist, saveUserWatchlist,
    getUserfilmSeen, saveUserfilmSeen,
    getUserfilmsLike, saveUserfilmsLike,
    getUserfilmsDislike, saveUserfilmsDislike, } = require("../controllers/user.controllers")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const router = require("express").Router()


router.get("/watchlist", isAuthenticated, getUserWatchlist)
router.post("/watchlistSave", isAuthenticated, saveUserWatchlist)

router.get("/filmSeen", isAuthenticated, getUserfilmSeen)
router.post("/filmSeen", isAuthenticated, saveUserfilmSeen)


router.get("/filmsLike", isAuthenticated, getUserfilmsLike)
router.post("/filmsLike", isAuthenticated, saveUserfilmsLike)


router.get("/filmsDislike", isAuthenticated, getUserfilmsDislike)
router.post("/filmsDislike", isAuthenticated, saveUserfilmsDislike)







module.exports = router