const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Match', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user_id1: { type: DataTypes.INTEGER, allowNull: false },
        user_id2: { type: DataTypes.INTEGER, allowNull: false },
        matched_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        is_active: { type: DataTypes.BOOLEAN, defaultValue: true }
    });
};t