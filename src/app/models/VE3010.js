/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VE3010', {
    VE3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VE3_GRUITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VE3_CODITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                           '
    },
    VE3_MODVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VE3_SEGMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VE3_CODSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VE3_CODMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VE3_ANOMOD: {
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
    VE3_ANOINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VE3_ANOFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VE3_FAMILI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VE3_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VE3_SUBCLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'VE3010'
  });
};
