/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPF010', {
    PF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PF_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PF_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PF_TURNODE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PF_SEQUEDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PF_REGRADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PF_TURNOPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PF_SEQUEPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PF_REGRAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PF_RHEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    },
    PF_TRFUNID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PF_TRFOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    PF_JORNADE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PF_JORNAPA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SPF010'
  });
};
