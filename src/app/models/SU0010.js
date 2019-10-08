/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SU0010', {
    U0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U0_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U0_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    U0_DESCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_ACRESCI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_TIPOCTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_USAMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_USAAGEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_TEMPCRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    U0_VALIDAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    U0_PRECOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_EXTERNA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U0_BOUND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_CONFTMK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U0_AVALCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_AVALEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_OPEREST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U0_OPEFEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U0_ESTACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    U0_TIPOATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_REGSEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U0_REGNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U0_VALCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_AGPRIOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_LSTVLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_VLDTMK: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    U0_VLDTLV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    U0_ANIVERS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_PERIODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_VLDSCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_TIPOIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_TLCMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_ACDGRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    U0_CODSKA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    U0_SERVSLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U0_PENDCHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_GRPSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U0_DESCSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    U0_TURNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    U0_REABCHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_COMPART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U0_GRPORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U0_RECCHAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_CHAVUNI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    U0_TMKWIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_TPALOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_OPALOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U0_USAHAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_AUTOSEL: {
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
    },
    U0_ATURAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U0_RESPONS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'SU0010'
  });
};
