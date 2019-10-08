/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AOR010', {
    AOR_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AOR_CODPAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AOR_CODNIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AOR_CODROT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AOR_STATUS: {
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
    tableName: 'AOR010'
  });
};
