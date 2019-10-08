/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFP010', {
    FP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FP_FILUSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FP_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FP_NUMINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FP_NUMFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FP_CAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    FP_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FP_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FP_DTAVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    FP_PV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    }
  }, {
    tableName: 'SFP010'
  });
};
