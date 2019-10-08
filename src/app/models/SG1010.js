/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SG1010', {
    G1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    G1_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    G1_COMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    G1_TRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    G1_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    G1_PERDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    G1_INI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    G1_FIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    G1_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    G1_FIXVAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G1_GROPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    G1_OPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    G1_REVINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    G1_REVFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    G1_NIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    G1_NIVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    G1_POTENCI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    G1_VECTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    G1_VLCOMPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G1_TIPVEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    G1_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
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
    tableName: 'SG1010'
  });
};
