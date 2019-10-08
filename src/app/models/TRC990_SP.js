/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TRC990_SP', {
    TRC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TRC_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TRC_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TRC_ALIAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TRC_QFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    TRC_DIVERG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)',
      primaryKey: true
    }
  }, {
    tableName: 'TRC990_SP'
  });
};
