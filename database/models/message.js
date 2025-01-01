const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Message', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        match_id: { type: DataTypes.INTEGER, allowNull: false },
        sender_id: { type: DataTypes.INTEGER, allowNull: false },
        message: { type: DataTypes.TEXT, allowNull: false },
        sent_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
};e