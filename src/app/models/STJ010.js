/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STJ010', {
    TJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TJ_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJ_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJ_DTORIGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TJ_TIPOOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TJ_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TJ_SERVICO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJ_SEQRELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TJ_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TJ_CODAREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJ_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TJ_POSCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TJ_HORACO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TJ_CUSTMDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TJ_CUSTMAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TJ_CUSTMAA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TJ_CUSTMAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TJ_CUSTTER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TJ_DTULTMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TJ_COULTMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TJ_DTPPINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TJ_HOPPINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TJ_DTPPFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TJ_HOPPFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TJ_DTPRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TJ_HOPRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TJ_DTPRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TJ_HOPRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TJ_DTMPINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TJ_HOMPINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TJ_DTMPFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TJ_HOMPFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TJ_DTMRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TJ_HOMRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TJ_DTMRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TJ_HOMRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TJ_COULTM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TJ_POSCON2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TJ_TERMINO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TJ_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TJ_PRIORID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TJ_HORACO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TJ_SITUACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TJ_CENTRAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJ_TIPORET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TJ_ORDEPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJ_BEMPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TJ_FILQNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TJ_FNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TJ_REVQFNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TJ_VALATF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TJ_LUBRIFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TJ_SUBSTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    TJ_OBSERVA: {
      type: "IMAGE",
      allowNull: true
    },
    TJ_SOLICI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJ_SEQUENC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TJ_IRREGU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TJ_TERCEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TJ_STFOLUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJ_CONTINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TJ_CONTFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TJ_USUAINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TJ_USUAFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TJ_QTDREP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TJ_MOTREPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    TJ_CUSTFER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TJ_CDEVENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJ_OSORIG: {
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
    TJ_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TJ_INTPRJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TJ_INTTSK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TJ_FATURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TJ_APROPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'STJ010'
  });
};
