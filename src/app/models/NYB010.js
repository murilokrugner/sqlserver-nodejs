/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NYB010', {
    NYB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NYB_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NYB_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    NYB_CORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NYB_IDGED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    NYB_IDGRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
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
    tableName: 'NYB010'
  });
};
