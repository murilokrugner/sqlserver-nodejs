/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AI4010', {
    AI4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AI4_CODUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AI4_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AI4_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AI4_SKIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    tableName: 'AI4010'
  });
};
