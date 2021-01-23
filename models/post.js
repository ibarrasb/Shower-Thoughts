module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Posts", {
    post_title: DataTypes.STRING,
    post_desc: DataTypes.STRING,
    post_date: DataTypes.DATE
  },
  {timestamps: false}
  );

  Post.associate = function (models) {
    Post.belongsTo(models.Category, {
      foreignKey: {
        name: 'cat_id',
        targetKey: 'id',
        allowNull: false
      }
    });
  };
  Post.associate = function (models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        name: 'user_id',
        targetKey: 'id',
        allowNull: false
      }
    });

  };
  return Post;
};