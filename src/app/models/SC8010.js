/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SC8010', {
    C8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C8_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C8_NUMPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C8_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C8_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C8_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_QTDCTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_PRECO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_CODTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C8_COND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C8_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_TAXAFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_PRAZO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C8_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C8_CONTATO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C8_FILENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C8_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C8_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C8_ALIIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C8_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_VALFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_VALEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_DESC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_DESC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_DESC3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_TPFRETE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C8_TOTFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_AVISTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_REAJUST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C8_DTVISTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C8_VALIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C8_NUMPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C8_ITEMPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C8_NUMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C8_ITEMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C8_DATPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C8_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C8_VLDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C8_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    C8_GRUPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C8_STATME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C8_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C8_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_VALIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_BASEICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_BASEIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_DESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_MSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C8_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_TXMOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_ORCFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    C8_SEQFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C8_ITEFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C8_ITEMGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C8_ITSCGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C8_GRADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C8_CODORCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C8_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C8_CODED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C8_ACCNUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    C8_VALSOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_BASESOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_NUMPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C8_ACCITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
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
    C8_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    C8_TPDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C8_INTCLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C8_FORNOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    C8_FORMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    C8_WF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    C8_NUMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C8_PRECOOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C8_TAXAFOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SC8010'
  });
};
