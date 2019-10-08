/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AIF010', {
    AIF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AIF_FILTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AIF_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AIF_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AIF_CAMPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AIF_CONTEU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    AIF_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AIF_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AIF_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AIF_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AIF_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    }
  }, {
    tableName: 'AIF010'
  });
};
