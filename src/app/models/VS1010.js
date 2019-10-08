/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VS1010', {
    VS1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VS1_NUMORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VS1_TIPORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_CLIFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VS1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VS1_NCLIFT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VS1_CODMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VS1_DATORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VS1_HORORC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_TIPTEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VS1_CODVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VS1_CODVE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VS1_CODVE3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VS1_CODVE4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VS1_CODVE5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VS1_DATVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VS1_DATENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VS1_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VS1_PERPEC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_PERSER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_FORPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VS1_CENCUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VS1_CODBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VS1_CHAINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VS1_KILOME: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_NUMOSV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VS1_NUMPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VS1_NUMNFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VS1_SERNFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VS1_CTCDCI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VS1_NUMLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VS1_VALDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_DESACE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_ICMCAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_VTOTNF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_ORCACE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_NOROUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_OBSMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VS1_PESQLJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VS1_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VS1_VALFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_VALDUP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_VALSEG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_VPERDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_APOLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VS1_SINIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VS1_NROAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VS1_FRANQU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_RETPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_AUTENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VS1_ARMFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_RESFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_PGTFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_TIPVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_TITNCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    VS1_PERDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_DESCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VS1_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VS1_ALTORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_MENNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    VS1_MENPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VS1_CARTEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_MVFASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_CFNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_TIPCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_TIPTSV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VS1_BRICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_NUMATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VS1_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VS1_FILDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VS1_ARMDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VS1_NUMLIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VS1_VALPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_VALCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_VALIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_ICMRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_VALISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_NUMAGE: {
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
    VS1_STARES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_PEDSTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_TPATEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_DATALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VS1_PEDREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VS1_HORTRI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_TIPPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VS1_VLBRNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_MOTCRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VS1_RESERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_RESLOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                   '
    },
    VS1_VEICUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VS1_VOLUM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_VOLUM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_VOLUM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_VOLUM4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_ESPEC1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VS1_ESPEC2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VS1_ESPEC3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VS1_ESPEC4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VS1_PESOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_PESOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_INDPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VS1_DTHRPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    VS1_USUENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VS1_VALCMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_DIFAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS1_TIPMID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VS1_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VS1_GERFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'VS1010'
  });
};
