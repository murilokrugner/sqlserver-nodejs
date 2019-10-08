/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SN1990', {
    N1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N1_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    N1_PATRIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N1_CBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    N1_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    N1_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N1_AQUISIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N1_QUANTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N1_BAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N1_DESCRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    N1_CHAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N1_APOLICE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N1_CODSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N1_DTVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N1_CSEGURO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    N1_TIPOSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    N1_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N1_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N1_NSERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    N1_NFISCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N1_PROJETO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    N1_CHASSIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    N1_PLACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    N1_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N1_CODCIAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N1_ICMSAPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N1_DTBLOQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N1_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    N1_BASESUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    N1_ITEMSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    N1_CALCPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N1_CODBAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    N1_CONSAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N1_PENHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N1_MESCPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N1_DTCLASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N1_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N1_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    N1_TAXAPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N1_CODCUSD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    N1_TPCUSTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N1_TPBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    N1_TPOUTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    N1_CODRGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    N1_NOMCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    N1_AREA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N1_REDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N1_LOGIMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    N1_NRIMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    N1_COMIMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N1_BAIIMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    N1_MUNIMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    N1_SIGLAUF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N1_CEPIMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N1_DETPATR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N1_QUALIFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N1_UTIPATR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N1_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N1_NATBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N1_TPDEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N1_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N1_TPCTRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N1_NFITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    N1_NFESPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    N1_OK: {
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
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    },
    N1_CBCPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N1_VLAQUIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N1_PROJREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    N1_PROJETP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    N1_PROJITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    N1_INIAVP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N1_DTAVP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N1_INDAVP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N1_TAXAVP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N1_TPAVP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N1_MARGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N1_REVMRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    }
  }, {
    tableName: 'SN1990'
  });
};
