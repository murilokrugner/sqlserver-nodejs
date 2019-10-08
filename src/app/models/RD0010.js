/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RD0010', {
    RD0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD0_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD0_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RD0_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RD0_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD0_SEXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD0_DTNASC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RD0_CIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    RD0_DTADMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RD0_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RD0_CMPEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    RD0_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RD0_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    RD0_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RD0_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD0_DDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RD0_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RD0_FONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RD0_NUMCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RD0_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RD0_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RD0_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    RD0_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD0_CODMEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD0_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD0_MRKBRW: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD0_SENHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD0_PORTAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD0_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RD0_DVIAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD0_TELCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RD0_DDDCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD0_CELCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RD0_DTALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RD0_EMAILC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    RD0_CODCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD0_CODQUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD0_ALTQUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RD0_ALTCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RD0_DTADEM: {
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
    RD0_NUMEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD0_LOGIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    RD0_TPJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD0_SIGLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RD0_RESERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD0_NVLCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD0_LOGINR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    RD0_IDRESE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RD0_EMPATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD0_FILATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD0_EMPANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD0_FILANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD0_PERMAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD0_APSUBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD0_APROPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD0_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD0_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD0_USRPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD0_PIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    RD0_TPDEFF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'RD0010'
  });
};
