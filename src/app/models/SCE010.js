/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SCE010', {
    CE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CE_NUMCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CE_ITEMCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CE_NUMPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CE_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CE_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CE_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CE_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CE_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CE_ENTREGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CE_ITEMGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CE_REGIST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    }
  }, {
    tableName: 'SCE010'
  });
};
