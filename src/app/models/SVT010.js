/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SVT010', {
    VT_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VT_MESSPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VT_ANOSPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VT_REG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VT_DTSAIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VT_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VT_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VT_PRODORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VT_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    VT_EMPENHO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VT_PRGORI: {
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
    tableName: 'SVT010'
  });
};
