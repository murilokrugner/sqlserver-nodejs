/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYS_UPDATE_LOG_ITEM', {
    IT_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    IT_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    IT_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    IT_CONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    IT_IDIOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    IT_HASH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SYS_UPDATE_LOG_ITEM'
  });
};
