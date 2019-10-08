/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AEB010', {
    AEB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AEB_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AEB_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AEB_TIPPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AEB_INIPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AEB_FIMPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    }
  }, {
    tableName: 'AEB010'
  });
};
