/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTT010', {
    CTT_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTT_CUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTT_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_NORMAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_DESC01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTT_DESC02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTT_DESC03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTT_DESC04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTT_DESC05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTT_BLOQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_DTBLIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTT_DTBLFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTT_DTEXIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTT_DTEXSF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTT_CCLP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTT_CCPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTT_BOOK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTT_TIPO00: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTT_CCSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTT_TIPO01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTT_RES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CTT_CRGNV1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CTT_RGNV2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CTT_RGNV3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CTT_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTT_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CTT_PERCAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTT_PERFPA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTT_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTT_ENDER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTT_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTT_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTT_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTT_MUNIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTT_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_CEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CTT_VALFAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTT_RETIDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTT_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTT_OCORRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTT_ITOBRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_CLOBRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_ACITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_CCVM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTT_ACCLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_CCRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTT_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTT_CSINCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_PEREMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTT_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    CTT_RHEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CTT_ACAT04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_AT01OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_TPO03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTT_ATOBRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_ACAT03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_ACAT02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_ACAT01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_TPO01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTT_AT04OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_TPO04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTT_AT03OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_AT02OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_ACATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_TPO02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    CTT_TPLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTT_TIPO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_CEI2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CTT_FPAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTT_CODTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CTT_FAP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTT_PERRAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTT_RECFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_ICTPAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTT_TPINCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_NRINCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CTT_TPINPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_NRINPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CTT_INTRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_RESERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTT_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    CTT_CESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CTT_CPART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'CTT010'
  });
};
