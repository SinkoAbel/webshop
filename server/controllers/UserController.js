// const bcrypt = require("bcryptjs");
// userSchema.pre('save', async function(next) {
//     try {
//         if (!this.isModified('password')) {
//             return next();
//         }
//         const hashed = await bcrypt.hash(this.password, 10);
//         this.password = hashed;
//         return next();
//     } catch (err) {
//         return next(err);
//     }
// });
//
// userSchema.methods.comparePassword = async function(candidate, next) {
//     try {
//         const isMatch = await bcrypt.compare(candidate, this.password);
//         return isMatch;
//     } catch (err) {
//         return next(err);
//     }
// }