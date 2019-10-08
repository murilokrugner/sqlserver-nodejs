/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DBM010', {
    DBM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DBM_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DBM_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    DBM_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DBM_ITEMRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DBM_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DBM_ITGRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DBM_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DBM_USEROR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DBM_APROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DBM_USAPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DBM_USAPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DBM_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DBM_TIPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    }
  }, {
    tableName: 'DBM010'
  });
};
