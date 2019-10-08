/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EC5010', {
    EC5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EC5_INVOIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EC5_IDENTC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EC5_T_D: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EC5_DT_EMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EC5_DT_VEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EC5_HAWB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    EC5_FORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EC5_MOE_FO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EC5_AMOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EC5_FOB_TO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EC5_CD_PGT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EC5_VCFMES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EC5_VCFANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EC5_NR_CON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EC5_DT_CAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EC5_SIS_OR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EC5_T_D_NR: {
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
    tableName: 'EC5010'
  });
};
