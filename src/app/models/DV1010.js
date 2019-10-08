/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DV1010', {
    DV1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DV1_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DV1_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DV1_DOCTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DV1_REGTRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DV1_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DV1_TIPNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DV1_TIPCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DV1_SEQINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'DV1010'
  });
};
