/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EC7010', {
    EC7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EC7_INVOIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EC7_HAWB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    EC7_DI_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EC7_ID_CAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EC7_DT_LAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EC7_NR_LOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EC7_CTA_DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EC7_CTA_CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EC7_DT_CON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EC7_COD_HI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EC7_COM_HI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EC7_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EC7_NR_CON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EC7_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EC7_LINK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EC7_IDENTC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EC7_FORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EC7_BLOQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    EC7_MOEDA: {
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
    }
  }, {
    tableName: 'EC7010'
  });
};
