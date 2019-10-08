/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('XXG010', {
    XXG_CODFLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    XXG_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    XXG_IDFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    XXG_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    XXG_ATTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    XXG_IDIOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    XXG_TEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
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
    tableName: 'XXG010'
  });
};
