/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TFJ010', {
    TFJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFJ_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    TFJ_PROPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFJ_PREVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFJ_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFJ_CODENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFJ_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFJ_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFJ_AGRUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFJ_DESCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFJ_GRPRH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TFJ_ITEMRH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFJ_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFJ_GRPMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TFJ_ITEMMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFJ_TESMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFJ_GRPMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TFJ_ITEMMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFJ_TESMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFJ_GRPLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TFJ_ITEMLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFJ_TESLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFJ_CONTRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TFJ_CONREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFJ_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFJ_LUCRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFJ_ADM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFJ_CODVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFJ_TIPREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFJ_CODTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFJ_TABREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFJ_TABXML: {
      type: "VARBINARY",
      allowNull: true
    },
    TFJ_GESMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFJ_OBSPRC: {
      type: "VARBINARY",
      allowNull: true
    },
    TFJ_SRVEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFJ_TPFRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFJ_CLIPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFJ_ORCPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    TFJ_GRPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFJ_DSGCN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFJ_ANTECI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFJ_CNTREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFJ_RGMCX: {
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
    tableName: 'TFJ010'
  });
};
