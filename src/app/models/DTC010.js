/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DTC010', {
    DTC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_LOTNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_FILCFS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_DATENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTC_NUMSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DTC_FILDPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_ESTORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_NUMNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DTC_CTRDPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DTC_SERNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DTC_MOENFC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DTC_CODEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DTC_EMINFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTC_QTDVOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_PESOM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_METRO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_BASSEG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_QTDUNI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_CLIREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_LOJREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_SQIREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_CLIDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_LOJDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_SQEDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DTC_SQIDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_NUMCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_CLICON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_LOJCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_SQICON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_CLIDPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_LOJDPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_SQIDPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_ALIANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_DPCLOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_VALDPC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_DEVFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_CLIDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_LOJDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_CLICAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_LOJCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_TIPFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_SERTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_TIPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DTC_TIPNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_SELORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_CDRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_CDRDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_CDRCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_FILDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DTC_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DTC_CDRPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_DOCPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DTC_VLRINF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_CODOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_EDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_DATCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTC_HORCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTC_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTC_HORENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTC_RECEBE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DTC_KM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_DISTIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_CF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DTC_PESLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_INCOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DTC_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_CLINOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_LOJNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_CODDCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_ROTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_VALSEG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_EXCTDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_BASICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_NFELET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTC_EMINFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTC_CODNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTC_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_BASESU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_VALIST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_NFEID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    DTC_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_ICMRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_SERDPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DTC_PRVENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTC_TIPANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_DPCEMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTC_CTEANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    DTC_NFENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_FILOCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_NUMOCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_RECISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_IDREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DTC_ORIRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_CALRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_FRTSUB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTC_USUAGD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_NUMAGD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_ITEAGD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DTC_OLDSQD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DTC_SDOCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DTC_SDOCPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DTC_CLIEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTC_LOJEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    DTC_TIPAGD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_DATAGD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTC_PRDAGD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_INIAGD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTC_FIMAGD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTC_MOTAGD: {
      type: "VARBINARY",
      allowNull: true
    },
    DTC_PRHENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTC_NCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DTC_CODNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTC_DOCTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTC_DOCREE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'DTC010'
  });
};
