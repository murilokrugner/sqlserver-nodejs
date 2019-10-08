/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TNX010', {
    TNX_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNX_NUMRIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TNX_EPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TNX_AGENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNX_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNX_FAMIL: {
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
    }
  }, {
    tableName: 'TNX010'
  });
};
