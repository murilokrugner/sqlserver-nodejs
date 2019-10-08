/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SCY010', {
    CY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CY_TIPO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CY_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CY_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CY_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CY_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_CODTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_PRECO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_IPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_NUMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CY_ITEMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CY_DATPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CY_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CY_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CY_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CY_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CY_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CY_ITEMCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CY_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CY_COND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_CONTATO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CY_FILENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CY_DESC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_DESC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_DESC3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CY_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CY_QUJE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_REAJUST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_FRETE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_EMITIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CY_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CY_TPFRETE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CY_QTDREEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_CODLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CY_RESIDUO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CY_NUMCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CY_MSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_TX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CY_CONTROL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CY_IPIBRUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CY_ENCER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CY_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CY_VLDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CY_NUMIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CY_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CY_QTDACLA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_VALEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_FLUXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CY_TPOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CY_APROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CY_CONAPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CY_GRUPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CY_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CY_STATME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CY_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CY_QTDSOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_VALIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_DESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_BASEICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_BASEIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_VALFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_TXMOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_FREPPCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CY_PENDEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CY_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CY_DT_IMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CY_BASEIR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_AGENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_ALIQIR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_FORWARD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_TIPO_EM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_VALIR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_ORIGIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_ICMCOMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_DEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_ICMSRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_COMPRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_PESO_B: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_INCOTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_SEQMRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CY_CODORCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CY_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_CONSIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_DTLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CY_CONF_PE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CY_CODCRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CY_TIPOEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CY_DESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_ESPEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CY_EXPORTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CY_LOJAEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CY_PROVENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_CONTAIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CY_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CY_ITEMGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_MT3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_CONTA20: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_CONTA40: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_CON40HC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CY_ARMAZEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    CY_FABRICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CY_LOJFABR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CY_DT_EMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CY_TEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CY_EX_NCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CY_EX_NBM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'SCY010'
  });
};
