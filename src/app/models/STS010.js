/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STS010', {
    TS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TS_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TS_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TS_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TS_SERVICO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TS_SEQRELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TS_DTORIGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TS_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TS_CODAREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TS_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TS_POSCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TS_CUSTMDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TS_CUSTMAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TS_CUSTMAA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TS_CUSTMAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TS_CUSTTER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TS_DTULTMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TS_COULTMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TS_DTPPINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TS_HOPPINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TS_DTPPFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TS_HOPPFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TS_DTPRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TS_HOPRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TS_DTPRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TS_HOPRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TS_DTMPINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TS_HOMPINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TS_DTMPFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TS_HOMPFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TS_DTMRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TS_HOMRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TS_DTMRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TS_HOMRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TS_SITUACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TS_TERMINO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TS_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TS_TIPORET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TS_CENTRAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TS_PRIORID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TS_OBSERVA: {
      type: "IMAGE",
      allowNull: true
    },
    TS_POSCON2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TS_COULTM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TS_ORDEPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TS_BEMPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TS_FILQNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TS_FNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TS_REVQFNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TS_VALATF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TS_LUBRIFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TS_SUBSTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TS_HORACO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TS_HORACO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TS_TIPOOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TS_SOLICI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TS_SEQUENC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TS_IRREGU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TS_TERCEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TS_STFOLUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TS_CONTINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TS_CONTFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TS_USUAINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TS_USUAFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TS_QTDREP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TS_CUSTFER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TS_MOTREPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    TS_CDEVENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TS_OSORIG: {
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
    TS_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TS_INTPRJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TS_INTTSK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TS_FATURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TS_APROPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'STS010'
  });
};
