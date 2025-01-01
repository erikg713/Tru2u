const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Profile', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        display_name: { type: DataTypes.STRING, allowNull: false },
        age: { type: DataTypes.INTEGER, allowNull: false },
        gender: { type: DataTypes.STRING },
        bio: { type: DataTypes.TEXT },
        profile_picture_url: { type: DataTypes.STRING },
        created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
};q