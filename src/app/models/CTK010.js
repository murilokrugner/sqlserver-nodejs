/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTK010', {
    CTK_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CTK_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CTK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTK_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CTK_DC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTK_DEBITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTK_CREDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTK_VLR01: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTK_VLR02: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTK_VLR03: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTK_VLR04: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTK_VLR05: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTK_MOEDAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CTK_HIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTK_CCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTK_CCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTK_ITEMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTK_ITEMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTK_INTERC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTK_LP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTK_LPSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTK_CLVLDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTK_CLVLCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTK_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CTK_CONTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTK_KEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CTK_ATIVDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTK_ATIVCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTK_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CTK_TPSALD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTK_MOEDLC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTK_SBLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTK_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTK_DTVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTK_TABORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTK_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CTK_RECORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    CTK_RECDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    CTK_RECCV3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    CTK_HAGLUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTK_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CTK_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTK_MLTSLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTK_AT01DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTK_AT01CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTK_AT02DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTK_AT02CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTK_AT03DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTK_AT03CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTK_AT04DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTK_AT04CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTK_CODPAR: {
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
    CTK_MOEFDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTK_MOEFCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTK_CTRLSD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CTK010'
  });
};
