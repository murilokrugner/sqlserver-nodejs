/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SZ3010', {
    Z3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Z3_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Z3_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    Z3_ANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    Z3_CODIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Z3_DESCIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    Z3_CREDITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Z3_PERCENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Z3_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Z3_PARTCIP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'SZ3010'
  });
};
