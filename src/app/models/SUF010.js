/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SUF010', {
    UF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UF_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UF_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UF_ASSUNTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UF_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    UF_DESCPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                   '
    },
    UF_OCORREN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UF_CODSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UF_OPERADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UF_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UF_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UF_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                '
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
    }
  }, {
    tableName: 'SUF010'
  });
};
