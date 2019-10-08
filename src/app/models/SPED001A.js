/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED001A', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTULTALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    COD_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    COD_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    IM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    SUFRAMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    NIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    NIRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    DTRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    FANTASIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ENDER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    COMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    CEP_CP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
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
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED001A'
  });
};
