/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MBL010', {
    MBL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MBL_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MBL_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    MBL_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    MBL_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    MBL_VLINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MBL_VLFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MBL_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MBL_CUSTO: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MBL010'
  });
};
