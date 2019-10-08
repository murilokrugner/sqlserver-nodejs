/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SF6010', {
    F6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F6_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    F6_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F6_TIPOIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F6_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F6_INSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    F6_DTARREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F6_DTVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F6_MESREF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F6_ANOREF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F6_NUMCONV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    F6_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F6_AGENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    F6_CODREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    F6_CLAVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F6_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    F6_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F6_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F6_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F6_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F6_OPERNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F6_TIPODOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F6_DTPAGTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F6_CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    F6_VENCAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F6_DOCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    F6_REF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F6_ATMON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F6_JUROS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F6_MULTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F6_INF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    F6_CODPROD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F6_AUTENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    F6_ACORDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    F6_NUMPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    F6_INDPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F6_DESCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    F6_DETRECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F6_PROCESS: {
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
    F6_SE2TIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F6_PEDDED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    F6_VIMPDED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F6_ISSOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F6_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    F6_COBREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F6_RECIBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    F6_GNREWS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F6_IDTSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    F6_AMBIWS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F6_CDBARRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                '
    },
    F6_NUMCTRL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    F6_XMLENV: {
      type: "IMAGE",
      allowNull: true
    },
    F6_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F6_FECP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F6_IFCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F6_DTLIMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'SF6010'
  });
};
