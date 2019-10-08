/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SDP010', {
    DP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DP_ITPCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DP_FILCEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DP_FILNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DP_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DP_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DP_QTDENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DP_PEDCEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DP_ITPCCN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DP_PEDORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'SDP010'
  });
};
