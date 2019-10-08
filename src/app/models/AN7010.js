/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AN7010', {
    AN7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AN7_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AN7_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AN7_ALIAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AN7_FILTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AN7_EXPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
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
    tableName: 'AN7010'
  });
};
