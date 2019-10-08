/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AJF010', {
    AJF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AJF_ORCAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AJF_EDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AJF_FASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AJF_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AJF_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AJF_ESTRUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AJF_DOCUME: {
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
    AJF_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'AJF010'
  });
};
