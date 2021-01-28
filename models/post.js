module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Posts", {
  
    post_title: DataTypes.STRING,
    post_desc: DataTypes.STRING,
    post_date: DataTypes.DATE,
    user_name: DataTypes.STRING,
   
   
  },
  {timestamps: false,
  primaryKey: true,
},

  );

  return Post;
};