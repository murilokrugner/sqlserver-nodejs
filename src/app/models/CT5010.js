/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CT5010', {
    CT5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT5_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_LANPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CT5_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT5_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CT5_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CT5_DC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT5_DEBITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_CREDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_MOEDAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CT5_VLR01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_VLR02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_VLR03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_VLR04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_VLR05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_HIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_HAGLUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_CCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_CCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CT5_INTERC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT5_ITEMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_ITEMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_CLVLDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_CLVLCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_ATIVDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_ATIVCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_TPSALD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT5_MOEDLC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT5_SBLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CT5_ROTRAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    CT5_DTVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT5_TABORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CT5_RECORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CT5_CVKVER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CT5_CVKSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CT5_MLTSLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT5_AT03DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CT5_AT04CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CT5_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    CT5_AT03CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CT5_AT01DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CT5_AT02DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CT5_AT02CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CT5_AT01CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CT5_AT04DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CT5_CODPAR: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CT5_MOEFDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CT5_MOEFCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CT5_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    CT5_CTRLSD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CT5010'
  });
};
