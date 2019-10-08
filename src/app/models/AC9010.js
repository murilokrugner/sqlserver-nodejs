/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AC9010', {
    AC9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AC9_FILENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AC9_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AC9_CODENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    AC9_CODOBJ: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'AC9010'
  });
};
