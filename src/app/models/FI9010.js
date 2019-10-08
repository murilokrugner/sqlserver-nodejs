/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FI9010', {
    FI9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI9_IDDARF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FI9_EMISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FI9_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI9_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FI9_PARCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI9_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI9_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FI9_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI9_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI9_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FI9_CODRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FI9_REFER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    FI9_FILCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI9_APURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FI9_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI9_VENCIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FI9_INCORP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    FI9_ESTABE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
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
    tableName: 'FI9010'
  });
};
