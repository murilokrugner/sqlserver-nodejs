/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SBU010', {
    BU_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BU_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BU_BASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                          '
    },
    BU_IDC1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                        '
    },
    BU_IDC2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                        '
    },
    BU_COMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BU_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BU_CONDICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    BU_FORMSHK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BU_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    BU_INI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BU_FIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BU_POTENCI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BU_PERDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BU_TRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BU_TIPVEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BU_VECTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BU_OPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BU_GROPC: {
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
    tableName: 'SBU010'
  });
};
