/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NQY010', {
    NQY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NQY_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NQY_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    NQY_CRPT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NQY_CFGJUR: {
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
    tableName: 'NQY010'
  });
};
