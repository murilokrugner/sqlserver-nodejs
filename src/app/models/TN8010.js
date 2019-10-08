/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TN8010', {
    TN8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TN8_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TN8_EXAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TN8_FAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TN8_TIPOEX: {
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
    tableName: 'TN8010'
  });
};
