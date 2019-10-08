/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CPG010', {
    CPG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CPG_CODPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CPG_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CPG_EVENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CPG_DESATV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CPG_MODEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CPG_VIEW: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CPG_DECID1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CPG_DECID2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CPG_FICHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CPG_MECAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CPG_MAUSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CPG_MAGRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CPG_ATVCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    CPG_CONSEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CPG_ATUPRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    CPG_MCPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CPG_DESENG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CPG_DESSPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CPG_DESPTG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CPG_DSCATV: {
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
    tableName: 'CPG010'
  });
};
