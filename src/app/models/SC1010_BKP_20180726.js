/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SC1010_BKP_20180726', {
    C1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_NUM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_ITEM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_UM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    C1_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    C1_DATPRF: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_OBS: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_OP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_CC: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_CONTA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_ITEMCTA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_COTACAO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_ITEMPED: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_SOLICIT: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_IDENT: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_QUJE: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    C1_TX: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_OK: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_OS: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_UNIDREQ: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_CODCOMP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_CLASS: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_FABR: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_FABRLOJ: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_NUM_SI: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_TPOP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_GRUPCOM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_USER: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_QUJE2: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    C1_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_CLVL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_PROJETO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_FILENT: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_SEQMRP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_VUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    C1_CONDPAG: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_CODORCA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_RESIDUO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_QTDORIG: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    C1_PRECO: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    C1_TIPOEMP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_ESPEMP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    C1_APROV: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_TIPO: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    C1_GERACTR: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    C1_QTDREEM: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    C1_SIGLA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_FABRICA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_LOJFABR: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_ITEMGRD: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_GRADE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_NOMAPRO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_FLAGGCT: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_PROGRAM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_TPSC: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_MODAL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_TPMOD: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_CODED: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_NUMPR: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_ORCAM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_ACCNUM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_ACCPROC: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_ACCITEM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_USRCODE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    C1_ESTOQUE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_REVISAO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_RATEIO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_IDAPS: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_COMPRAC: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_FISCORI: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_ITSCORI: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_SCORI: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_PRDREF: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_TIPCOM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_PEDRES: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C1_NRBPIMS: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'SC1010_BKP_20180726'
  });
};
