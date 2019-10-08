/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SUM010', {
    UM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UM_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UM_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                       '
    },
    UM_DESC_I: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                       '
    },
    UM_DESC_E: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                       '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    UM_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UM_CRGSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'SUM010'
  });
};
