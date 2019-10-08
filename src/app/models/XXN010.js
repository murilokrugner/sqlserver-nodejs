/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('XXN010', {
    XXN_CODFLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    XXN_ALIAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    XXN_AGRUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    XXN_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XXN_ATTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    XXN_IDIOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    XXN_TEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
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
    tableName: 'XXN010'
  });
};
