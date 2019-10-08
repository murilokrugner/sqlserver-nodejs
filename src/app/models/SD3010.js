/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SD3010', {
    D3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3_TM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D3_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D3_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_CF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D3_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D3_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    D3_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D3_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D3_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D3_CUSTO1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_CUSTO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_CUSTO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_CUSTO4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_CUSTO5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D3_PARCTOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D3_ESTORNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D3_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D3_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D3_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    D3_REGWMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D3_PERDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_DTLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D3_TRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D3_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D3_SEQCALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    D3_RATEIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_LOTECTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D3_NUMLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D3_DTVALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D3_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D3_NUMSERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D3_CUSFF1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_CUSFF2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_CUSFF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_CUSFF4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_CUSFF5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3_ITEMCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D3_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D3_PROJPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D3_TASKPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    D3_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D3_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D3_STSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D3_OSTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D3_POTENCI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_TPESTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D3_REGATEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D3_ITEMSWN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D3_DOCSWN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D3_ITEMGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D3_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3_CUSRP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_CUSRP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_CUSRP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_CUSRP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_CUSRP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_CMRP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_MOEDRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D3_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D3_EMPOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D3_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3_GARANTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D3_PMICNUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_CMFIXO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D3_PMACNUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_NRBPIMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D3_CODLAN: {
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
    D3_OKISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3_PERIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_VLRVI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_REVISAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D3_HAWB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    D3_QTGANHO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_QTMAIOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_NUMSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D3_CHAVEF1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                    '
    },
    D3_NRABATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D3_ITEMSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3_VLRPD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_TEATF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D3_CODSAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D3_TANQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D3_MASSA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_TEMPAMO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_TEMPTAQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_DENSAMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_QTDAMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_FATCORR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3_TPMOVAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D3_NFORP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D3_LOJAFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D3_CHAVEF2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                    '
    },
    D3_IDDCF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D3_OBSERVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    D3_FORNDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D3_LOJADOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3_PERBLK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D3_FATHER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SD3010'
  });
};
