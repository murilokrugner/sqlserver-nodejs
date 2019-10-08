/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SGG010', {
    GG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GG_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    GG_COMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    GG_TRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    GG_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GG_PERDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GG_INI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GG_FIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GG_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                             '
    },
    GG_FIXVAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GG_GROPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    GG_OPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    GG_NIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GG_NIVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GG_POTENCI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GG_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    GG_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GG_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GG_REVINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    GG_REVFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    GG_TIPVEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GG_VECTOR: {
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
    }
  }, {
    tableName: 'SGG010'
  });
};
