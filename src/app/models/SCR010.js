/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SCR010', {
    CR_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CR_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    CR_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CR_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CR_APROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CR_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CR_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CR_DATALIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CR_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CR_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CR_USERLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CR_LIBAPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CR_VALLIB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CR_TIPOLIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CR_WF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CR_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CR_TXMOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CR_USERORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CR_APRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    CR_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    CR_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CR_ITGRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CR_FLUIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CR_PRAZO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CR_AVISO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CR_ULTAVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CR_ESCALON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    CR_ESCALSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    }
  }, {
    tableName: 'SCR010'
  });
};
