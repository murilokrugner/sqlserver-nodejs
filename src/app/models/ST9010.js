/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ST9010', {
    T9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T9_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    T9_CODIMOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    T9_FERRAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_RECFERR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    T9_TIPMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    T9_FABRICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    T9_CODFAMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    T9_PADRAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_CATBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    T9_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T9_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    T9_CALENDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    T9_CENTRAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    T9_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    T9_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T9_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    T9_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    T9_DTCOMPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    T9_ESTRUTU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_PRGARAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_UNGARAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_DTGARAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    T9_PRIORID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    T9_CODESTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    T9_TEMCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_TPCONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    T9_POSCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_DTULTAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    T9_CONTACU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_VARDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_LIMICON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_PERACOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_UNIACOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_INDPOND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_PONDERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    T9_VIRADAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_SITMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_SITBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    T9_CHAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    T9_CONTDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_VALODES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_UNIDDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    T9_LOJACLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T9_VALCPA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_CUSTOHO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_AJUSCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_MOVIBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_DTINSTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    T9_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    T9_TERCEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_CONTGAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_DTBAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    T9_MTBAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    T9_DESCRIC: {
      type: "IMAGE",
      allowNull: true
    },
    T9_CODTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    T9_PLACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    T9_CAPMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_MEDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_TIPVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T9_ANOMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    T9_ANOFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    T9_CHASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    T9_VALANO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_NFCOMPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    T9_DTVENDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    T9_COMPRAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    T9_NFVENDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    T9_CORVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T9_CIDEMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    T9_UFEMPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T9_RENAVAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    T9_NRMOTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    T9_CEREVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_MEDMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_ITEMCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    T9_ACOPLA: {
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
    },
    T9_LOCPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T9_VALVENA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_INSTALA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_BARCODE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    T9_PARTEDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_DTDESMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    T9_VALPROR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_LUBRIFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_ALUGUEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T9_PERMANU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_SEGLICE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_VALPRES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_VALFAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T9_PROPRIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'ST9010'
  });
};
