const UserModel = require('../../models/users');

module.exports.getFollowing = function (req, callback) {
    const { id } = req;
    UserModel.findById(id,
        function (err, model) {
            callback(null, model.following);
        }
    ).populate('following');
}