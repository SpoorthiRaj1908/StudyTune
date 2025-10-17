const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/user');

module.exports = function(passport) {
  // Custom field name: allow login by username OR email
  passport.use(new LocalStrategy(
    { usernameField: 'identifier' }, // can be username or email
    async (identifier, password, done) => {
      try {
        // Find by username or email
        const user = await User.findOne({
          $or: [{ username: identifier }, { email: identifier }]
        });

        if (!user)
          return done(null, false, { message: 'No user found with that username/email' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return done(null, false, { message: 'Incorrect password' });

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  ));

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};
