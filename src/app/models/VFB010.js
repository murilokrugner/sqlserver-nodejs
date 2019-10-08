/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VFB010', {
    VFB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VFB_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VFB_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VFB_CHAINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VFB_SERPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VFB_GRUITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VFB_CODITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                           '
    },
    VFB_CODSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VFB_QTDAPL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VFB_NUMOSV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VFB_TIPTEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VFB_KILOME: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VFB_DATAPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VFB_DATFEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VFB_NUMREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VFB_ORDCRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VFB_TIPREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VFB_TIPSER: {
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
    }
  }, {
    tableName: 'VFB010'
  });
};
