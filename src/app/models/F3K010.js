/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('F3K010', {
    F3K_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F3K_PROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    F3K_CFOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    F3K_CODAJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F3K_VALOR: {
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
    tableName: 'F3K010'
  });
};
