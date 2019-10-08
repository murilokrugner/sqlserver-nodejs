/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AB2010', {
    AB2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB2_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB2_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AB2_CLASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AB2_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AB2_NUMSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AB2_CODPRB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB2_NUMOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB2_NUMORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB2_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AB2_MEMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB2_CODFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB2_LOJAFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB2_NRCHAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB2_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB2_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB2_EMISSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB2_BXDATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB2_BXHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AB2_NUMHDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB2_CODFNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AB2_FNCREV: {
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
    tableName: 'AB2010'
  });
};
