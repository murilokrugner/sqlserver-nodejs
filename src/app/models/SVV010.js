/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SVV010', {
    VV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV_MESSPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV_ANOSPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VV_REG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VV_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    VV_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VV_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV_PRGORI: {
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
    tableName: 'SVV010'
  });
};
