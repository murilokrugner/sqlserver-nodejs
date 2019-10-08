/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DUY010', {
    DUY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUY_GRPVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUY_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DUY_GRPSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUY_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUY_FILDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUY_CDRCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUY_CATREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUY_CDRTAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUY_CATGRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUY_REGISE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUY_ALQISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUY_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUY_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DUY_PORTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    tableName: 'DUY010'
  });
};
