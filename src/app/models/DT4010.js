/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DT4010', {
    DT4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT4_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT4_NUMCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT4_DATCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT4_HORCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DT4_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT4_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DT4_NUMSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DT4_PRZVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT4_TIPFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT4_CODOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT4_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT4_SELORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT4_CDRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT4_CDRDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT4_SERTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT4_TIPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT4_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT4_TABFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DT4_TIPTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT4_SEQTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT4_DESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT4_TMENTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DT4_TMENTF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DT4_CLIREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT4_LOJREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT4_CLIDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT4_LOJDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT4_CLIDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT4_LOJDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT4_DATCAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT4_CODOBC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT4_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT4_USRAPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT4_ACRESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT4_PESSOA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT4_TIPNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT4_KM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT4_INCISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT4_DISTIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT4_INCOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT4_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT4_ROTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT4_CONTRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT4_CADPOR: {
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
    DT4_CODSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DT4_NUMATD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT4_ITEATD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT4_SOLFLG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT4_NCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DT4_DOCTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT4_CODNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'DT4010'
  });
};
