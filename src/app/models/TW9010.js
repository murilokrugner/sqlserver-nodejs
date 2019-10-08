/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TW9010', {
    TW9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TW9_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TW9_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TW9_CONTRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TW9_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TW9_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TW9_CLILOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TW9_AGPPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TW9_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TW9_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TW9_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TW9_NATCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TW9_NUMPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TW9_DTFINA: {
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
    tableName: 'TW9010'
  });
};
