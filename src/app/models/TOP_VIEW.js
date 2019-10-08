/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TOP_VIEW', {
    VIEW_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    TABLE_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FLD_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FLD_ORDER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TOP_VIEW'
  });
};
