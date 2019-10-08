/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NQV010', {
    NQV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NQV_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NQV_CRELAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NQV_CAMPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NQV_CAMPOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    tableName: 'NQV010'
  });
};
