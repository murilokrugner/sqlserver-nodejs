/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED002B', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ID_PART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTULTALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    COD_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    COD_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
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
    }
  }, {
    tableName: 'SPED002B'
  });
};
