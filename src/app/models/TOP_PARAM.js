/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TOP_PARAM', {
    PARAM_NAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PARAM_SESSION: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PARAM_VALUE: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'TOP_PARAM'
  });
};
