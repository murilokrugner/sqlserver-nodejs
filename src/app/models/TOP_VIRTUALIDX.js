/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TOP_VIRTUALIDX', {
    IDX_ENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    IDX_TABLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    IDX_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    IDX_KEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                               '
    }
  }, {
    tableName: 'TOP_VIRTUALIDX'
  });
};
