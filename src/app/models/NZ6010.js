/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NZ6010', {
    NZ6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NZ6_TIPOAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NZ6_CPARAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NZ6_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NZ6_CONTEU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
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
    tableName: 'NZ6010'
  });
};
