/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FIG010', {
    FIG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIG_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIG_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FIG_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIG_NOMFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FIG_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    FIG_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIG_VENCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIG_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FIG_CONCIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIG_DTCONC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIG_USCONC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    FIG_DDASE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    FIG_CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    FIG_CODBAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
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
    tableName: 'FIG010'
  });
};
