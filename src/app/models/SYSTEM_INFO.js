/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM_INFO', {
    MPI_SYNAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    MPI_KEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    MPI_VALUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    MPI_DATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
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
    tableName: 'SYSTEM_INFO'
  });
};
