module.exports = function (sequelize, DataTypes) {
    var Reply = sequelize.define("Reply", {
        rep_desc: DataTypes.STRING,
        usernme: DataTypes.STRING,
   
    });

    Reply.associate = function (models) {
        Reply.belongsTo(models.Posts, {
            foreignKey: {
                name: 'post_id',
                targetKey: 'id',
                allowNull: false,
        
            
            }
        });
    };

    return Reply;
};