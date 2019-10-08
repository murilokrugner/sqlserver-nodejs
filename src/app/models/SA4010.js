/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SA4010', {
    A4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A4_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A4_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A4_NREDUZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A4_VIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A4_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A4_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A4_COD_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A4_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A4_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A4_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A4_DDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A4_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A4_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A4_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    A4_TELEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A4_INSEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A4_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A4_HPAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A4_CONTATO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A4_ESTFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A4_ENDPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A4_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A4_RATFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A4_COMPLEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    A4_FOMEZER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A4_SUFRAMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    A4_CODPAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A4_TPTRANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A4_COLIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A4_ENDNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A4_IDETIQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    A4_INSCRM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    A4_ECSERVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    }
  }, {
    tableName: 'SA4010'
  });
};
