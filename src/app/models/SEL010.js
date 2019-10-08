/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEL010', {
    EL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL_RECIBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EL_CLIORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EL_LOJORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EL_NATUREZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL_TIPODOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL_PREFIXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EL_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EL_PARCELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EL_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL_DTVCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL_TPCRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL_VLMOED1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EL_AGENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EL_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL_BCOCHQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EL_AGECHQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EL_CTACHQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL_OBSBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EL_ACREBAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL_TERCEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL_CANCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    EL_DTDIGIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL_PREREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL_TXMOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL_COBRAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EL_RECPROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EL_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EL_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EL_TXMOE02: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL_TXMOE03: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL_TXMOE04: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL_TXMOE05: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL_JUROS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL_MULTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    EL_EMISREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SEL010'
  });
};
