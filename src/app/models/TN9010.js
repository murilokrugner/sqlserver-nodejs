/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TN9010', {
    TN9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TN9_EXAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TN9_FAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TN9_TIPOEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TN9_USERGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
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
    tableName: 'TN9010'
  });
};
