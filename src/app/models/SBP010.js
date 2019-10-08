/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SBP010', {
    BP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BP_BASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                          '
    },
    BP_MASCARA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BP_DISPUSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BP_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    BP_ESTCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    BP_CODPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BP_CAMPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BP_TIPVEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BP_LM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BP_GDODIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BP_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BP_ESTRUT: {
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
    tableName: 'SBP010'
  });
};
