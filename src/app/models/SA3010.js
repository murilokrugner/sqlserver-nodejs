/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SA3010', {
    A3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A3_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    A3_NREDUZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    A3_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A3_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A3_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A3_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A3_DDDTEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A3_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A3_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A3_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A3_TELEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A3_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    A3_INSCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    A3_INSCRM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    A3_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    A3_HPAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A3_CODUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_SUPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_GEREN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A3_GERASE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_BCO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A3_REGIAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A3_COMIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A3_ALEMISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A3_ALBAIXA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A3_ICM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_ICMSRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_ISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_IPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_FRETE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_ACREFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_DIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A3_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_TIPSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A3_PERDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A3_DIARESE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A3_SENHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_UNIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_HAND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_PEDINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_QTCONTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A3_PEDFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_REGSLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_CLIINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_CLIFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_PROXPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_PROXCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_GRPREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_FAT_RH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A3_GRUPSAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_DEPEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A3_PEN_ALI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A3_TIPVEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_URLEXG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    A3_NUMRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A3_DDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_CEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A3_ADMISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A3_NVLSTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A3_NIVEL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A3_LANEXG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A3_PISCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_LEGADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_CONTRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    A3_MERCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    A3_SALARIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A3_DIARIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A3_OUTROS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A3_CATEGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    A3_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_SINCTAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_SINCAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_SINCCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_PERAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_PERTAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_TIMEMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    A3_USUCORP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A3_HABSINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_EMACORP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    A3_BIAGEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_BITAREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_BICONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_DTUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A3_HRUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A3_MSEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A3_HREXPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A3_BASEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A3_USERLGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    A3_USERLGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    A3_MODTRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A3_SNAEXG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    }
  }, {
    tableName: 'SA3010'
  });
};
