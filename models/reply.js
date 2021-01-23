module.exports = function (sequelize, DataTypes) {
    var Reply = sequelize.define("Reply", {
        rep_desc: DataTypes.STRING,
        usernme: DataTypes.STRING
    });

    Reply.associate = function (models) {
        Reply.belongsTo(models.Post, {
            foreignKey: {
                name: 'post_id',
                targetKey: 'id',
                allowNull: false
            }
        });
    };
    // Reply.associate = function (models) {
    //     Reply.belongsTo(models.User, {
    //         foreignKey: {
    //             name: 'user_id',
    //             targetKey: 'id',
    //             allowNull: false
    //         }
    //     });
    // };
    // Reply.associate = function (models) {
    //     Reply.belongsTo(models.Category, {
    //         foreignKey: {
    //             name: 'cat_id',
    //             targetKey: 'id',
    //             allowNull: false
    //         }
    //     });
    // };
    return Reply;
};