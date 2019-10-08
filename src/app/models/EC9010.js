/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EC9010', {
    EC9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EC9_INVOIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EC9_IDENTC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EC9_ID_CAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EC9_DT_LAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EC9_DTCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EC9_NR_CON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EC9_DTCONV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EC9_PARIDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EC9_FLUTUA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EC9_VL_MOE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EC9_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EC9_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EC9_LANCMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EC9_FORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EC9_BLOQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    EC9_SEQ: {
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
    }
  }, {
    tableName: 'EC9010'
  });
};
