const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const saltRounds = 10


const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (value) {
          return /^([^@]*@[^@]*)$/.test(value);
        },
        message: 'Invalid Email'
      }
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
      validate: {
        validator: function (value) {
          return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-=_+{}[\]|;:"<>,./?]).{8,}$/.test(value);
        },
        message: 'Password must contain: uppercase letter | one lowercase letter | one number | one special character'
      }
    },
    userName: {
      type: String,
      required: [true, 'UserName is required.'],
      trim: true,

    },
    firstName: {
      type: String,
      required: [true, 'First Name is required.'],
      trim: true,
    },
    watchList: [

      {
        id: String,
        typeId: String
      }
    ],
    filmSeen: [String],
    filmsDislike: [String],
    filmsLike: [String],
  },
  {
    timestamps: true
  }
)

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(this.password, salt);
  this.password = hashedPassword;

  next();
});

const User = model("User", userSchema);

module.exports = User;
