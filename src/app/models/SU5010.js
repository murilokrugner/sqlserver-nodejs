/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SU5010', {
    U5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U5_CODCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U5_CONTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    U5_CPF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    U5_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    U5_RG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    U5_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    U5_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    U5_OAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    U5_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U5_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    U5_CODPAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U5_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    U5_FONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    U5_CELULAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    U5_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    U5_FCOM1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    U5_FCOM2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    U5_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    U5_URL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    U5_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U5_SEXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U5_NIVER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    U5_RENDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    U5_AUTORIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U5_CIVIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U5_CONJUGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    U5_FILHOS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    U5_NOMEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    U5_OPERADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U5_DIALIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    U5_NDIALIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    U5_HORA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    U5_HORA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    U5_DIAVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    U5_NDIAVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    U5_HORAV1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    U5_HORAV2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    U5_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    U5_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U5_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U5_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U5_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    U5_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U5_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U5_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U5_PROSPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U5_ULTCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    U5_LOJAPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U5_PERIOD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    U5_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U5_IDSITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    U5_CODAGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U5_AGBRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U5_AGBCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U5_AGBFAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U5_AGBCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U5_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    U5_TRATA: {
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
    U5_IDEXC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    U5_CHGKEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                            '
    },
    U5_CODSA3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U5_IDESTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    U5_NVESTN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    U5_CONPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U5_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U5_CODUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U5_ENDI: {
      type: "VARBINARY",
      allowNull: true
    },
    U5_SOLICTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SU5010'
  });
};
