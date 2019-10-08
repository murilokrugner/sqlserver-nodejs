/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SGA010', {
    GA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GA_GROPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    GA_DESCGRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    GA_OPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    GA_DESCOPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    GA_PRCVEN: {
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
    GA_OBG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SGA010'
  });
};
