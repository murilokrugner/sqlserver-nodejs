/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SUD010', {
    UD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UD_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UD_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UD_ASSUNTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UD_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    UD_OCORREN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UD_SOLUCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UD_OPERADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UD_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UD_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UD_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                '
    },
    UD_DTEXEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UD_CODEXEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UD_CODFNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    UD_FNCREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UD_EVENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UD_GRADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    UD_NSERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    UD_NUMOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UD_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UD_VENDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UD_CODCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UD_ITEMVDA: {
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
    }
  }, {
    tableName: 'SUD010'
  });
};
