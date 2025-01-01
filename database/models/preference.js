const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Preference', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        preferred_gender: { type: DataTypes.STRING },
        age_min: { type: DataTypes.INTEGER, defaultValue: 18 },
        age_max: { type: DataTypes.INTEGER, defaultValue: 99 }
    });
};a