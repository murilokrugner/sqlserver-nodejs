/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QDZ010', {
    QDZ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDZ_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QDZ_RV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QDZ_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDZ_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QDZ_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QDZ_DIGITA: {
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
    tableName: 'QDZ010'
  });
};
