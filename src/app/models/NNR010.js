/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NNR010', {
    NNR_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NNR_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NNR_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NNR_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NNR_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NNR_CTRAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NNR_INTP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    NNR_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NNR_MRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NNR_ARMALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NNR_ANP45: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    NNR_AMZUNI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NNR_VDADMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'NNR010'
  });
};
