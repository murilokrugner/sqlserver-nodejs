/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SAS010', {
    AS_CODREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                          '
    },
    AS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AS_CURVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AS_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AS_ORIG: {
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
    tableName: 'SAS010'
  });
};
