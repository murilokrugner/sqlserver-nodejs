/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TOP_FIELD', {
    FIELD_TABLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                '
    },
    FIELD_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FIELD_TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIELD_PREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FIELD_DEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    }
  }, {
    tableName: 'TOP_FIELD'
  });
};
