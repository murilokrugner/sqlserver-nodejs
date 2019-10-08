/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AD9010', {
    AD9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD9_NROPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD9_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD9_HISTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AD9_CODCON: {
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
    tableName: 'AD9010'
  });
};
