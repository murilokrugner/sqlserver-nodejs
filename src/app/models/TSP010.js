/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TSP010', {
    TSP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TSP_NUMREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TSP_DATARE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TSP_HORARE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TSP_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TSP_OBSERV: {
      type: "IMAGE",
      allowNull: true
    },
    TSP_STATUS: {
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
    tableName: 'TSP010'
  });
};
