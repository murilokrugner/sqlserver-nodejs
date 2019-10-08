/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SUB010', {
    UB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UB_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UB_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UB_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    UB_SITPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UB_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UB_VRUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UB_VLRITEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UB_DESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UB_VALDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UB_ACRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UB_VALACRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UB_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    UB_CF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    UB_PRCTAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UB_BASEICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UB_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UB_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UB_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UB_DTENTRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UB_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    UB_SUBLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UB_DTVALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UB_NUMPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UB_ITEMPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UB_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UB_OPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
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
    UB_ITEMPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UB_NUMPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    UB_VLIMPOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UB_FCICOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    UB_OPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UB_PICMRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SUB010'
  });
};
