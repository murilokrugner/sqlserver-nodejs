/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TN2010', {
    TN2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TN2_NUMRIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TN2_AGENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TN2_EXAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TN2_FAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TN2_SEQGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TN2_TIPOEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TN2_USERGI: {
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
    tableName: 'TN2010'
  });
};
