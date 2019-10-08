/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NUZ010', {
    NUZ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUZ_CAMPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NUZ_DESCPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NUZ_CTAJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'NUZ010'
  });
};
