/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SC6990', {
    C6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C6_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_QTDVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_PRCVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_QTDLIB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_QTDLIB2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C6_UNSVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_CF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    C6_QTDENT2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_QTDENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_CLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_VALDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_ENTREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C6_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C6_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_NOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C6_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C6_DATFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C6_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_COMIS1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_COMIS2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_COMIS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_COMIS4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_COMIS5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_PEDCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C6_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    C6_PRUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_BLOQUEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_RESERVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_NFORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C6_SERIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C6_ITEMORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C6_IPIDEV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_IDENTB6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_BLQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_PICMRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C6_GRADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C6_ITEMGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C6_LOTECTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C6_NUMLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_DTVALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C6_NUMORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C6_CHASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    C6_OPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    C6_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C6_NUMSERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    C6_NUMOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_ITEMOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_CLASFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C6_QTDRESE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_CONTRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_NUMOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C6_NUMOSFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C6_CODFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_LOJAFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_ITEMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_TPOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C6_REVISAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C6_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C6_ENDPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C6_TPESTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_CONTRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C6_TPCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C6_ITCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_GEROUPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C6_PROJPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C6_EDTPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    C6_TASKPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    C6_TRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C6_QTDEMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_QTDEMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_ITPROJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_POTENCI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_LICITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_REGWMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C6_MOPC: {
      type: "IMAGE",
      allowNull: true
    },
    C6_NUMCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_NUMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_ITEMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C6_SUGENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C6_ITEMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C6_ABSCINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_ABATISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_ABATMAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_FUNRURA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_FETAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_CODROM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_PROGRAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C6_TURNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C6_LOJDED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_CODLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_FORDED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_ITPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C6_PVCOMOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C6_VDMOST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C6_FILPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C6_PEDCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_VDOBS: {
      type: "IMAGE",
      allowNull: true
    },
    C6_TPDEDUZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C6_MOTDED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C6_VLDED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_VLNFD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_RATEIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C6_SERDED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C6_PCDED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C6_NFDED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C6_ITLPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C6_D1SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C6_D1DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C6_CODLPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C6_D1ITEM: {
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
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    }
  }, {
    tableName: 'SC6990'
  });
};
