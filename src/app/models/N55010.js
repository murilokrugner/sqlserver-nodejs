/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('N55010', {
    N55_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N55_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N55_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N55_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N55_DESPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N55_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N55_UNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N55_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N55_MAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N55_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    N55_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N55_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    N55_EMISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N55_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N55_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N55_SALDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N55_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    N55_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N55_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N55_DESFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N55_COND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    N55_LIQUID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N55_DTULGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N55_TPCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N55_MULTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    N55_COTAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N55_ITCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    N55_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N55_ITEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
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
    tableName: 'N55010'
  });
};
