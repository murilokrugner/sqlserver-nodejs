/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BA0010', {
    BA0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA0_CODIDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA0_CODINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA0_NOMINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    BA0_CLAINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA0_GRUOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA0_CAMCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA0_SUSEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA0_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    BA0_INCEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BA0_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    BA0_SITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    BA0_DATFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BA0_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BA0_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    BA0_NUMEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BA0_COMPEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BA0_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    BA0_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    BA0_CIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    BA0_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA0_TELEF1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BA0_TELEF2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BA0_TELEF3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BA0_FAX1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BA0_FAX2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BA0_FAX3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BA0_MATFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA0_MODOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA0_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA0_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA0_TBRFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA0_CODTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA0_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA0_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA0_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BA0_TIPOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA0_EXPIDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    BA0_NOMCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    BA0_VL2BOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BA0_VLCSOP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BA0_VENCTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BA0_TIPVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA0_VENCUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BA0_TIPCUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA0_ENVPTU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BA0_RECPTU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BA0_EMAPTU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    BA0_RESPTU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    BA0_CODRDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BA0_ONLINE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA0_DIARET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BA0_A100: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BA0_A300: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    BA0_A600: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    BA0_A700: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BA0_LIMCH: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BA0_TIPLIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA0_NIVVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA0_GNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA0_BLOINO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA0_TIPPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA0_BCOCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA0_AGECLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BA0_CTACLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BA0_PORTAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BA0_AGEDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BA0_CTACOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BA0_EMPORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA0_BASCOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA0_ABRANG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA0_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BA0_NATJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BA0_MODALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BA0_SEGMEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BA0_CODREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BA0_ACOPUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA0_TOTACO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BA0_RAMAL1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BA0_RAMAL2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BA0_RAMAL3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BA0_SENQUI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA0_MAXRG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BA0_TPOPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA0_TISVER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    BA0_SENRAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA0_SENOPM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA0_PRZREC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BA0_CRIPRZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BA0_TPPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BA0_TABPRZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA0_CRILIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BA0_TABLIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BA0_AUTGES: {
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
    BA0_LIECON: {
      type: "VARBINARY",
      allowNull: true
    },
    BA0_VLRAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    BA0_DIGANE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'BA0010'
  });
};
