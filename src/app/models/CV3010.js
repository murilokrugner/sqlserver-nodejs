/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CV3010', {
    CV3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CV3_DTSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CV3_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CV3_LP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CV3_LPSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CV3_KEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CV3_MOEDLC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CV3_DC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CV3_DEBITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CV3_CREDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CV3_VLR01: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CV3_HIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CV3_CCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV3_CCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV3_ITEMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV3_ITEMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV3_CLVLDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV3_CLVLCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CV3_VLR02: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CV3_VLR03: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CV3_VLR04: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CV3_VLR05: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CV3_TABORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CV3_RECORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    CV3_RECDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    CV3_MLTSLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CV3_AT01DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CV3_AT01CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CV3_AT02DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CV3_AT02CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CV3_AT03DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CV3_AT03CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CV3_AT04DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CV3_AT04CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    tableName: 'CV3010'
  });
};
