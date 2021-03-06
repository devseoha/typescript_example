import * as passport from "passport";
import User from "../models/user";

export default () => {
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id: number, done) => {
    try {
      const user = await User.findOne({
        where: { id },
      });
      return done(null, user);
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });
};
