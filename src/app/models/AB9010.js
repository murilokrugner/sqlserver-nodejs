/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AB9010', {
    AB9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB9_NUMOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB9_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB9_CODTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    AB9_DTCHEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB9_HRCHEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AB9_DTSAID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB9_HRSAID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AB9_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB9_HRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AB9_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB9_HRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AB9_TRASLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AB9_CODPRB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB9_GARANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AB9_ACUMUL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB9_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AB9_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB9_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB9_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AB9_MEMO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB9_TOTFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AB9_NUMORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB9_CUSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB9_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AB9_STATAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AB9_CODFNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AB9_FNCREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB9_TMKLST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB9_CONTRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AB9_CODGRP: {
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
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB9_ATUPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AB9_BENENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AB9_MPONTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AB9_ATAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AB9_ITAPUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB9_ADIENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AB9_CODTWZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'AB9010'
  });
};
