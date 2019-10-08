/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED001M', {
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
    COD_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    CP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ENDERECO: {
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
    DDN: {
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
    XMLCFG: {
      type: "IMAGE",
      allowNull: true
    },
    CIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED001M'
  });
};
