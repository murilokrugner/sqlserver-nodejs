/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BA3010', {
    BA3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA3_CODINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BA3_CODEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BA3_CONEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    BA3_VERCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_SUBCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    BA3_VERSUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_NUMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BA3_MATRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA3_MATEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    BA3_MATANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    BA3_HORACN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BA3_COBNIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_VENCTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BA3_DATBAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BA3_PODREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_DATCIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BA3_MESREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA3_INDREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA3_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA3_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA3_TIPOUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BA3_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA3_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA3_MOTBLO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_DATBLO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BA3_CODPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BA3_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_FORPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_TIPCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_SEGPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_MODPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_FORCTX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_TXUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_FORCOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_AGMTFU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA3_APLEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_AGFTFU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA3_VALSAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BA3_ROTSAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    BA3_EQUIPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_CODVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA3_ENDCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BA3_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    BA3_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA3_COMPLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BA3_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BA3_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    BA3_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    BA3_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA3_USUOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA3_DATCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BA3_HORCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BA3_GRPCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BA3_CODTDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_DESMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    BA3_RGIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_DEMITI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_DATDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BA3_MOTDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_LIMATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BA3_ABRANG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA3_INFCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_INFGCB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BA3_VALANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BA3_LETANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BA3_DATALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BA3_COBRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_RATMAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_COBRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_DIARET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BA3_ULTCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BA3_RATSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_NUMCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    BA3_ULREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA3_CARIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_PERMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA3_NIVFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_NIVFTX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_NIVFOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_OUTLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_MATFMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    BA3_CODACO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA3_TRAORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    BA3_TRADES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    BA3_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BA3_VALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BA3_DATPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BA3_DESLIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_DATDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BA3_LOTTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BA3_BLOFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_CODRDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA3_CODLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_TIPPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA3_BCOCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_AGECLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BA3_CTACLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BA3_LIMITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BA3_PORTAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_AGEDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BA3_CTACOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BA3_DESMEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BA3_CODVE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA3_CONSID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_PADSAU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA3_PLPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    BA3_AGLUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_PACOOK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_CODTES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA3_DIASIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BA3_CODSB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BA3_GRPFAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    BA3_REEWEB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_TIPPGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA3_UNDORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    tableName: 'BA3010'
  });
};
