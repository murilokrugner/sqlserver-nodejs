import Sequelize, { Model } from 'sequelize';

class SC7010 extends Model {
  static init(sequelize) {
    super.init(
      {
        C7_FILIAL: Sequelize.STRING,
        C7_TIPO: Sequelize.FLOAT,
        C7_ITEM: Sequelize.STRING,
        C7_PRODUTO: Sequelize.STRING,
        C7_DESCRI: Sequelize.STRING,
        C7_UM: Sequelize.STRING,
        C7_SEGUM: Sequelize.STRING,
        C7_CODTAB: Sequelize.STRING,
        C7_QUANT: Sequelize.FLOAT,
        C7_PRECO: Sequelize.FLOAT,
        C7_TOTAL: Sequelize.FLOAT,
        C7_X_NEGOC: Sequelize.STRING,
        C7_QTSEGUM: Sequelize.FLOAT,
        C7_IPI: Sequelize.FLOAT,
        C7_DATPRF: Sequelize.STRING,
        C7_NUMSC: Sequelize.STRING,
        C7_ITEMSC: Sequelize.STRING,
        C7_LOCAL: Sequelize.STRING,
        C7_OBS: Sequelize.STRING,
        C7_FORNECE: Sequelize.STRING,
        C7_CC: Sequelize.STRING,
        C7_CONTA: Sequelize.STRING,
        C7_COND: Sequelize.STRING,
        C7_CONTATO:Sequelize.STRING,
        C7_ITEMCTA: Sequelize.STRING,
        C7_LOJA: Sequelize.STRING,
        C7_FILENT: Sequelize.STRING,
        C7_DESC1: Sequelize.FLOAT,
        C7_EMISSAO: Sequelize.STRING,
        C7_NUM: Sequelize.STRING,
        C7_DESC2: Sequelize.FLOAT,
        C7_DESC3: Sequelize.FLOAT,
        C7_QUJE: Sequelize.FLOAT,
        C7_REAJUST: Sequelize.STRING,
        C7_FRETE: Sequelize.FLOAT,
        C7_EMITIDO: Sequelize.STRING,
        C7_TPFRETE: Sequelize.STRING,
        C7_QTDREEM: Sequelize.FLOAT,
        C7_CODLIB:Sequelize.STRING,
        C7_RESIDUO: Sequelize.STRING,
        C7_NUMCOT: Sequelize.STRING,
        C7_TX: Sequelize.STRING,
        C7_MSG: Sequelize.STRING,
        C7_CONTROL: Sequelize.STRING,
        C7_ENCER: Sequelize.STRING,
        C7_OP: Sequelize.STRING,
        C7_IPIBRUT: Sequelize.STRING,
        C7_VLDESC: Sequelize.FLOAT,
        C7_SEQUEN: Sequelize.STRING,
        C7_NUMIMP: Sequelize.STRING,
        C7_ORIGEM: Sequelize.STRING,
        C7_QTDACLA: Sequelize.FLOAT,
        C7_VALEMB: Sequelize.FLOAT,
        C7_FLUXO: Sequelize.STRING,
        C7_TPOP: Sequelize.STRING,
        C7_APROV: Sequelize.STRING,
        C7_CONAPRO: Sequelize.STRING,
        C7_GRUPCOM: Sequelize.STRING,
        C7_USER: Sequelize.STRING,
        C7_STATME: Sequelize.STRING,
        C7_OK: Sequelize.STRING,
        C7_QTDSOL: Sequelize.FLOAT,
        C7_VALIPI: Sequelize.FLOAT,
        C7_VALICM: Sequelize.FLOAT,
        C7_TES: Sequelize.STRING,
        C7_DESC: Sequelize.FLOAT,
        C7_PICM: Sequelize.FLOAT,
        C7_BASEICM: Sequelize.FLOAT,
        C7_BASEIPI: Sequelize.FLOAT,
        C7_SEGURO: Sequelize.FLOAT,
        C7_DESPESA: Sequelize.FLOAT,
        C7_VALFRE: Sequelize.FLOAT,
        C7_TXMOEDA: Sequelize.FLOAT,
        C7_MOEDA: Sequelize.FLOAT,
        C7_PENDEN: Sequelize.STRING,
        C7_CLVL: Sequelize.STRING,
        C7_BASEIR: Sequelize.FLOAT,
        C7_ALIQIR: Sequelize.FLOAT,
        C7_VALIR: Sequelize.FLOAT,
        C7_ICMCOMP: Sequelize.FLOAT,
        C7_ICMSRET: Sequelize.FLOAT,
        C7_ESTOQUE: Sequelize.STRING,
        C7_VALSOL: Sequelize.FLOAT,
        C7_SEQMRP: Sequelize.STRING,
        C7_CODORCA: Sequelize.STRING,
        C7_DTLANC: Sequelize.STRING,
        C7_CODCRED: Sequelize.STRING,
        C7_TIPOEMP: Sequelize.STRING,
        C7_CONTRA: Sequelize.STRING,
        C7_CONTREV: Sequelize.STRING,
        C7_PLANILH: Sequelize.STRING,
        C7_MEDICAO: Sequelize.STRING,
        C7_ITEMED: Sequelize.STRING,
        C7_ESPEMP: Sequelize.STRING,
        C7_POLREPR: Sequelize.STRING,
        C7_FREPPCC: Sequelize.STRING,
        C7_PERREPR: Sequelize.FLOAT,
        C7_DT_IMP: Sequelize.STRING,
        C7_GRADE: Sequelize.STRING,
        C7_ITEMGRD: Sequelize.STRING,
        C7_AGENTE: Sequelize.STRING,
        C7_FORWARD: Sequelize.STRING,
        C7_TIPO_EM: Sequelize.STRING,
        C7_ORIGIMP: Sequelize.STRING,
        C7_DEST: Sequelize.STRING,
        C7_COMPRA: Sequelize.STRING,
        C7_PESO_B: Sequelize.FLOAT,
        C7_INCOTER: Sequelize.STRING,
        C7_IMPORT: Sequelize.STRING,
        C7_CONSIG: Sequelize.STRING,
        C7_CONF_PE: Sequelize.STRING,
        C7_DESP: Sequelize.STRING,
        C7_EXPORTA: Sequelize.STRING,
        C7_LOJAEXP: Sequelize.STRING,
        C7_CONTAIN: Sequelize.STRING,
        C7_MT3: Sequelize.FLOAT,
        C7_CONTA20: Sequelize.FLOAT,
        C7_CONTA40: Sequelize.FLOAT,
        C7_CON40HC: Sequelize.FLOAT,
        C7_ARMAZEM: Sequelize.STRING,
        C7_FABRICA: Sequelize.STRING,
        C7_LOJFABR: Sequelize.STRING,
        C7_DT_EMB: Sequelize.STRING,
        C7_TEC: Sequelize.STRING,
        C7_EX_NCM: Sequelize.STRING,
        C7_BASESOL: Sequelize.FLOAT,
        C7_DIACTB: Sequelize.STRING,
        C7_NODIA: Sequelize.STRING,
        C7_CODED: Sequelize.STRING,
        C7_EX_NBM: Sequelize.STRING,
        C7_NUMPR: Sequelize.STRING,
        C7_RATEIO: Sequelize.STRING,
        C7_FILCEN: Sequelize.STRING,
        C7_PO_EIC: Sequelize.STRING,
        C7_ACCPROC: Sequelize.STRING,
        C7_ACCNUM: Sequelize.STRING,
        C7_ACCITEM: Sequelize.STRING,
        C7_IDTSS: Sequelize.STRING,
        C7_TPCOLAB: Sequelize.STRING,
        D_E_L_E_T_: Sequelize.STRING,
        R_E_C_N_O_: Sequelize.INTEGER,
        R_E_C_D_E_L_: Sequelize.INTEGER,
        C7_DINICOM: Sequelize.STRING,
        C7_DINITRA: Sequelize.STRING,
        C7_DINICQ: Sequelize.STRING,
        C7_RESREM: Sequelize.STRING,
        C7_BASIMP5: Sequelize.FLOAT,
        C7_BASIMP6: Sequelize.FLOAT,
        C7_SOLICIT: Sequelize.STRING,
        C7_VALIMP5: Sequelize.FLOAT,
        C7_VALIMP6: Sequelize.FLOAT,
        C7_OBSM: Sequelize.STRING,
        C7_TIPCOM: Sequelize.STRING,
        C7_FILEDT: Sequelize.STRING,
        C7_NUMSA: Sequelize.STRING,
        C7_REVISAO: Sequelize.STRING,
        C7_BASECSL: Sequelize.FLOAT,
        C7_ALIQINS: Sequelize.FLOAT,
        C7_VALINS: Sequelize.FLOAT,
        C7_ALQCSL: Sequelize.FLOAT,
        C7_ALIQISS: Sequelize.FLOAT,
        C7_VALISS: Sequelize.FLOAT,
        C7_CODNE: Sequelize.STRING,
        C7_ITEMNE: Sequelize.STRING,
        C7_GCPIT: Sequelize.STRING,
        C7_GCPLT: Sequelize.STRING,
        C7_BASEINS: Sequelize.FLOAT,
        C7_VALCSL: Sequelize.FLOAT,
        C7_LOTPLS: Sequelize.STRING,
        C7_CODRDA: Sequelize.STRING,
        C7_BASEISS: Sequelize.FLOAT,
        C7_FISCORI: Sequelize.STRING,
        C7_PLOPELT: Sequelize.STRING,
        C7_OBRIGA: Sequelize.STRING,
        C7_DIREITO: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default SC7010;


/*module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SC7010', {
    C7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C7_TIPO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C7_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C7_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    C7_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C7_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C7_CODTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_PRECO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_X_NEGOC: {
      type: "IMAGE",
      allowNull: true
    },
    C7_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_IPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_DATPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C7_NUMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_ITEMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C7_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C7_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    C7_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C7_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    C7_COND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_CONTATO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C7_ITEMCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C7_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C7_FILENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C7_DESC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C7_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_DESC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_DESC3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_QUJE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_REAJUST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_FRETE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_EMITIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_TPFRETE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_QTDREEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_CODLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C7_RESIDUO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_NUMCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_TX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C7_MSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_CONTROL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_ENCER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    C7_IPIBRUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_VLDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C7_NUMIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C7_QTDACLA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_VALEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_FLUXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_TPOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_APROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_CONAPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_GRUPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_STATME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C7_QTDSOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_VALIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_DESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_BASEICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_BASEIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_VALFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_TXMOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_PENDEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C7_BASEIR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_ALIQIR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_VALIR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_ICMCOMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_ICMSRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_ESTOQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_VALSOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_SEQMRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_CODORCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C7_DTLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C7_CODCRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_TIPOEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C7_CONTREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_PLANILH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_MEDICAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_ITEMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C7_ESPEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_POLREPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_FREPPCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C7_PERREPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_DT_IMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C7_GRADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_ITEMGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_AGENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_FORWARD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_TIPO_EM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_ORIGIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_DEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_COMPRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_PESO_B: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_INCOTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_CONSIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_CONF_PE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C7_DESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_EXPORTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_LOJAEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C7_CONTAIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_MT3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_CONTA20: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_CONTA40: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_CON40HC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_ARMAZEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    C7_FABRICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_LOJFABR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C7_DT_EMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C7_TEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C7_EX_NCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_BASESOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C7_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C7_CODED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C7_EX_NBM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_NUMPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C7_RATEIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_FILCEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C7_PO_EIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C7_ACCPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_ACCNUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    C7_ACCITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    C7_IDTSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C7_TPCOLAB: {
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
    },
    C7_DINICOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C7_DINITRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C7_DINICQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C7_RESREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C7_BASIMP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_BASIMP6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_SOLICIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    C7_VALIMP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_VALIMP6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_OBSM: {
      type: "IMAGE",
      allowNull: true
    },
    C7_TIPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_FILEDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C7_NUMSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_REVISAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_BASECSL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_ALIQINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_VALINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_ALQCSL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_ALIQISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_VALISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_CODNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    C7_ITEMNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C7_GCPIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_GCPLT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C7_BASEINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_VALCSL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_LOTPLS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C7_CODRDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C7_BASEISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C7_FISCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C7_PLOPELT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C7_OBRIGA: {
      type: "IMAGE",
      allowNull: true
    },
    C7_DIREITO: {
      type: "IMAGE",
      allowNull: true
    }
  }, {
    tableName: 'SC7010'
  });
};*/
