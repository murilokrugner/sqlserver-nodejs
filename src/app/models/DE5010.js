/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DE5010', {
    DE5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DE5_CGCREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    DE5_DTAEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DE5_CGCDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    DE5_SQIDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DE5_CGCCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    DE5_CGCDPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    DE5_CGCDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    DE5_TIPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DE5_TIPFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DE5_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DE5_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DE5_EMINFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DE5_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DE5_CODEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DE5_QTDVOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DE5_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DE5_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DE5_PESOM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DE5_VALSEG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DE5_FILDPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DE5_CTRDPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DE5_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DE5_METRO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DE5_BASEIC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DE5_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DE5_BASIST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DE5_VALIST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DE5_CFOPNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DE5_NFEID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    DE5_LOTEDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DE5_STAUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DE5_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DE5_SERTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DE5_SELORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DE5_OBSAUT: {
      type: "IMAGE",
      allowNull: true
    },
    DE5_EDIAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DE5_EDILOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DE5_EDIFRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DE5_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DE5_LOTNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DE5_SEQEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DE5_OLDSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DE5_EMINFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DE5_CODNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DE5_NFELET: {
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
    DE5_TIPAGD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DE5_DATAGD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DE5_CODNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DE5_PRDAGD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DE5_INIAGD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DE5_FIMAGD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DE5_MOTAGD: {
      type: "VARBINARY",
      allowNull: true
    },
    DE5_INSCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                   '
    },
    DE5_INSDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    }
  }, {
    tableName: 'DE5010'
  });
};
