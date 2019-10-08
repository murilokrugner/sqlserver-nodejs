/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFI010', {
    FI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI_DTMOVTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FI_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FI_PDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FI_SERPDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FI_NUMREDZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    FI_GTINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_GTFINAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_NUMINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FI_NUMFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FI_CANCEL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_VALCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_SUBTRIB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_DESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_ISENTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_NTRIB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_BAS7: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_BAS12: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_BAS18: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_BAS25: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_COO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FI_OUTROSR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_IMPDEBT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_ISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_SITUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI_CRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI_BAS001: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    FI_DTREDZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FI_HRREDZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FI_DOCBC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FI_DOCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FI_DOCFIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_IVAFIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_IINTFIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_PERCFIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_NCREDBC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FI_NCREDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FI_NCRED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_IVANCC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_IINTNCC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_PERCNCC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_ULTREMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    FI_PAFMD5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FI_COD12: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    FI_COD18: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    FI_COD25: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    FI_COD7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    FI_DESISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_CANISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI_MD5TRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FI_ERGRVBT: {
      type: "IMAGE",
      allowNull: true
    }
  }, {
    tableName: 'SFI010'
  });
};
