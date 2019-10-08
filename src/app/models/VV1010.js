/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VV1010', {
    VV1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV1_CHAINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV1_CODMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV1_NUMTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV1_TRACPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV1_CHASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    VV1_MODVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VV1_SEGMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV1_COMMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    VV1_FABMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV1_CARROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV1_CORVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV1_CORFXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV1_COMVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_CODORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_PROVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_ESTVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_PLAVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV1_INDCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_TIPVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_PLAREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV1_PROATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV1_LJPATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV1_CODCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV1_SITVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_RENAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VV1_NUMDIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV1_PESBRU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_TIPDIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV1_RELDIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_CAMBIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV1_NUMMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VV1_CAPTRA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_SERMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV1_TIPCAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV1_VENSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV1_QTDCIL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_TIPCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV1_NUMLOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_NUMPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV1_ITPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VV1_VENIPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV1_SUGVDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_CILMOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_TIPMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VV1_CODFRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    VV1_JUREST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_BXAEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_QTDEIX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_KILVEI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_POTMOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_POSIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV1_PROANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV1_DISEIX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_LJPANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV1_NOMANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VV1_ENDANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VV1_CIDANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    VV1_CEPANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VV1_ESTANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV1_TPGREX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_PESDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    VV1_OBSMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV1_CODGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VV1_ARQIMG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    VV1_GRTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV1_DTHRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                   '
    },
    VV1_DOCIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VV1_DTHVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                   '
    },
    VV1_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV1_PEDFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    VV1_CHARED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV1_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV1_LOCPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV1_TIPOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV1_DATVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV1_GRASEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_SITDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_PRIREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV1_DATREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV1_OBSPEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                          '
    },
    VV1_VEIACO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_HORRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV1_HORVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV1_TIPENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_DTHEMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    VV1_PORTAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_KMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_OPCFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    VV1_PRCACO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_BONFAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_LOCALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_DESLOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV1_MINVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_MINGER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_DESADM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_DATPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV1_DATPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV1_MEDMKM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_FILENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV1_MNCOMV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_FILSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV1_ULTMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_MNVLVD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_CM3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VV1_DONOVU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_PESLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_DTSUBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV1_3EIXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV1_TANQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    VV1_DATETG: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_RESERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_DTUVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV1_PROMOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_BLQPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_FOTOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_LOGALT: {
      type: "IMAGE",
      allowNull: true
    },
    VV1_IMOBI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_VALTAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_VALCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV1_CFGBAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    VV1_TRANSM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV1_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    VV1_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VV1_ITEMCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VV1_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VV1_CEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VV1_DESVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VV1_OBSVEI: {
      type: "VARBINARY",
      allowNull: true
    }
  }, {
    tableName: 'VV1010'
  });
};
