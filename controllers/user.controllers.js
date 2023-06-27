const User = require("../models/User.model")
const mongoose = require('mongoose');




const getUserWatchlist = (req, res, next) => {
    const { email } = req.payload

    User
        .findOne({ email })
        .then(respon => { res.json(respon.watchList) })
        .catch(() => next())

}

const saveUserWatchlist = (req, res, next) => {

    const { idFilm, type } = req.body
    const { _id, email } = req.payload
    const UserId = new mongoose.Types.ObjectId(_id)
    let newWatchlist


    User
        .findOne({ email })
        .then((respond) => {
            const { watchList } = respond

            if (watchList.some(item => item.id == idFilm)) {
                newWatchlist = watchList.filter(elem => elem.id != idFilm)
                User.findByIdAndUpdate(UserId, { watchList: newWatchlist }).then((respond) => res.json(respond))
            }
            else {



                let watchList2 = [...watchList, { id: idFilm, typeId: type }]
                User.findByIdAndUpdate(UserId, { watchList: watchList2 }).then((respond) => res.json(respond))
            }

        })
        .catch(() => next())

}

// ----------------------------------------------------------------------------------------------------------------------

const getUserfilmSeen = (req, res, next) => {
    const { email } = req.payload

    User
        .findOne({ email })
        .then(respon => { res.json(respon.filmSeen) })
        .catch(() => next())

}

const saveUserfilmSeen = (req, res, next) => {

    const { idFilm } = req.body
    const { _id, email } = req.payload
    const UserId = new mongoose.Types.ObjectId(_id)
    let newFilmSeen

    User
        .findOne({ email })
        .then((respond) => {
            const { filmSeen } = respond

            if (filmSeen.includes(idFilm)) {
                newFilmSeen = filmSeen.filter(elem => elem != idFilm)
                User.findByIdAndUpdate(UserId, { filmSeen: newFilmSeen }).then((respond) => res.json(respond))
            }
            else {

                filmSeen.push(idFilm)
                User.findByIdAndUpdate(UserId, { filmSeen }).then((respond) => res.json(respond))
            }

        })
        .catch(() => next())

}


// ----------------------------------------------------------------------------------------------------------------------

const getUserfilmsLike = (req, res, next) => {
    const { email } = req.payload

    User
        .findOne({ email })
        .then(respon => { res.json(respon.filmsLike) })
        .catch(() => next())

}

const saveUserfilmsLike = (req, res, next) => {

    const { idFilm } = req.body
    const { _id, email } = req.payload
    const UserId = new mongoose.Types.ObjectId(_id)
    let newFilmLike

    User
        .findOne({ email })
        .then((respond) => {
            const { filmsLike } = respond

            if (filmsLike.includes(idFilm)) {
                newFilmLike = filmsLike.filter(elem => elem != idFilm)
                User.findByIdAndUpdate(UserId, { filmsLike: newFilmLike }).then((respond) => res.json(respond))
            }
            else {

                filmsLike.push(idFilm)
                User.findByIdAndUpdate(UserId, { filmsLike }).then((respond) => res.json(respond))
            }

        })
        .catch(() => next())

}


// ----------------------------------------------------------------------------------------------------------------------

const getUserfilmsDislike = (req, res, next) => {
    const { email } = req.payload

    User
        .findOne({ email })
        .then(respon => { res.json(respon.filmsDislike) })
        .catch(() => next())

}

const saveUserfilmsDislike = (req, res, next) => {

    const { idFilm } = req.body
    const { _id, email } = req.payload
    const UserId = new mongoose.Types.ObjectId(_id)
    let newfilmsDislike

    User
        .findOne({ email })
        .then((respond) => {
            const { filmsDislike } = respond

            if (filmsDislike.includes(idFilm)) {
                newFilmLike = filmsDislike.filter(elem => elem != idFilm)
                User.findByIdAndUpdate(UserId, { filmsDislike: newfilmsDislike }).then((respond) => res.json(respond))
            }
            else {

                filmsDislike.push(idFilm)
                User.findByIdAndUpdate(UserId, { filmsDislike }).then((respond) => res.json(respond))
            }

        })
        .catch(() => next())

}












module.exports = {
    getUserWatchlist, saveUserWatchlist,
    getUserfilmSeen, saveUserfilmSeen,
    getUserfilmsLike, saveUserfilmsLike,
    getUserfilmsDislike, saveUserfilmsDislike,
}