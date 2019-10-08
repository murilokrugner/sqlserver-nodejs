/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AB4010', {
    AB4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB4_NUMORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB4_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB4_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AB4_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AB4_NUMSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AB4_CODPRB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB4_NRCHAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AB4_NUMOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB4_MEMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB4_CODFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB4_LOJAFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB4_BXDATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB4_BXHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AB4_OSORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    tableName: 'AB4010'
  });
};
