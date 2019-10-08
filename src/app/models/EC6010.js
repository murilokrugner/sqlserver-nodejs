/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EC6010', {
    EC6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EC6_TPMODU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EC6_ID_CAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EC6_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EC6_IDENTC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EC6_CTA_DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EC6_CTA_CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EC6_COD_HI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EC6_NO_CAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EC6_COM_HI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EC6_FINANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EC6_CDBEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EC6_CCREST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EC6_EVE_AS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EC6_CA_EVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EC6_CONTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EC6_DIAMES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EC6_RATEIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EC6_TXCV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EC6_RECDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EC6_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EC6_NATFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EC6_TPTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EC6_MOTBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EC6_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EC6_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EC6_PRDSIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EC6_DESINT: {
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
    tableName: 'EC6010'
  });
};
