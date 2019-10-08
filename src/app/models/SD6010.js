/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SD6010', {
    D6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D6_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D6_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D6_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D6_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D6_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D6_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D6_VRUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D6_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D6_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_ITEMPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D6_VENCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_SITUACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_PARCATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D6_PARCTOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D6_DEMONST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_MANUAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D6_NOVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D6_DIAVENC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D6_PRCREF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    D6_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    D6_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D6_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    D6_DATASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6_ULTREAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D6_DTUREAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6_PENREAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D6_DTPREAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6_INDICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_ACOMPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_FECHOU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_VALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6_D1PSW: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6_USERLGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    D6_USERLGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    D6_CONDPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D6_VIG_DE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6_VIG_ATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    D6_CREDITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_PROPOST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D6_ITPROP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_ALUGUEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_CLIENT2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_LOJ2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D6_CONDICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D6_DOCENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_DTCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6__GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D6_DTCANCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6_DTCANCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6_REAJANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D6_IMPOSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_MSEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6_MSRESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D6_VLRBONI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D6_BONIDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6_BONIATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_CLIENT3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_LOJ3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D6_ITEMORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D6_VINREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_CODREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_X_ANTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_MODALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_TPFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D6_X_IMPX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_SERMID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D6_SERPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D6_CONTRM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D6_STAT_RM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D6_CLIENT4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_LOJ4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D6_EST_RM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D6_OS_RM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_EMP_RM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D6_LIMT_RM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    D6_LIMT3RM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_VERS_RM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D6_SEQRM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D6_IDCNT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D6_CODTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D6_NOTASEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_CODVER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D6_WFENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_DEMONS2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_CARENCI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D6_INDICE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_QTDLIC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D6_DTASITU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6_QTDFAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D6_TIPFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D6_AGRUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D6_ITPRDTS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_PROPDTS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D6_VERDTS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_PRXREAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6_PEDPARC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D6_PROPTRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_PROPVER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D6_PEDST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D6_CLIORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_MASCCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    D6_CLIDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D6_DTPROCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D6_EMPDEPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D6_PROCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D6_LOJORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D6_LOJDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D6_DESCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    D6_DESCRMT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SD6010'
  });
};
