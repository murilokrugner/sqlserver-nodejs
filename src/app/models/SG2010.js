/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SG2010', {
    G2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    G2_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    G2_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    G2_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    G2_RECURSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    G2_FERRAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    G2_LINHAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    G2_TPALOCF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G2_TPLINHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G2_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    G2_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    G2_MAOOBRA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    G2_SETUP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    G2_FORMSTP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    G2_LOTEPAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    G2_TEMPAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    G2_TPOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G2_TPSOBRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G2_TEMPSOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    G2_TPDESD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G2_TEMPDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    G2_DESPROP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G2_CTRAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    G2_OPE_OBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G2_SEQ_OBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G2_LAU_OBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G2_REVIPRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    G2_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    G2_ROTALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    G2_OPERGRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G2_GRSETUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    G2_GRUPREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    G2_NIVMONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    G2_CHAVMON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    G2_TMAXPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    G2_TPINTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    G2_MAXINCR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    G2_FOLMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    G2_HOROTIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    G2_TEMPEND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    G2_REFGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                          '
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
    G2_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    G2_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'SG2010'
  });
};
