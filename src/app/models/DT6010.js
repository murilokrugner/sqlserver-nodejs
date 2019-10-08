/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DT6010', {
    DT6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_FILDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DT6_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT6_DATEMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT6_HOREMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DT6_VOLORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_QTDVOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_PESOM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_PESCOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_METRO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_VALMER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_QTDUNI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_VALFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_VALIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_VALTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_BASSEG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_SERTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT6_TIPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT6_DOCTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT6_CDRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_CDRDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_CDRCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_TABFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DT6_TIPTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_SEQTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_TIPFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT6_DOCSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DT6_NCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DT6_PRZENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT6_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_LOTNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_FILDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_FIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT6_BLQDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT6_PRIPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT6_PERDCO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_FILDCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_DOCDCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DT6_SERDCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT6_CLIREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_LOJREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_CLIDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_LOJDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_CLICON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_LOJCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_CLIDPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_LOJDPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_CLIDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_LOJDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_CLICAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_LOJCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_DEVFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT6_LOTCET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_FATURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DT6_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT6_ROTENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_DATENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT6_SELFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DT6_CODMSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_ULTEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT6_FILVGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_NUMVGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_NUMCMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT6_CUSTO1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_CUSTO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_CUSTO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_CUSTO4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_CUSTO5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_DATEDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT6_NUMSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_VENCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT6_ACRESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_DECRES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_FILDEB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT6_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DT6_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT6_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_BAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT6_FILNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_VALFAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_ALIANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_REENTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_TIPMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT6_FLOREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_LOTREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_CODOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_PESLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_USRGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_USRIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_SIGTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_NFELET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT6_EMINFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT6_CODNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT6_IDRCTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT6_PROCTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DT6_CHVCTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    DT6_SITCTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT6_RETCTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    DT6_AMBIEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT6_NUMAGD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_ITEAGD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT6_CHVCTG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    DT6_NUMPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DT6_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT6_SDOCMN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT6_SDOCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DT6_MODFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT6_CLIEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT6_LOJEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_CODNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT6_IDDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT6_ORICAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT6_DESCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT6_OBSDES: {
      type: "VARBINARY",
      allowNull: true
    },
    DT6_SQEDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    tableName: 'DT6010'
  });
};
