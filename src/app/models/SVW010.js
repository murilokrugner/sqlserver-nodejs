/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SVW010', {
    VW_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VW_MESSPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VW_ANOSPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VW_REG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VW_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    VW_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VW_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VW_PRGORI: {
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
    }
  }, {
    tableName: 'SVW010'
  });
};
