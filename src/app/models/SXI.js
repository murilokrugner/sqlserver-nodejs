/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SXI', {
    XI_USERID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    XI_CANAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    XI_CATEGOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    XI_EVENTID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    XI_RSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XI_MAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XI_SMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XI_CEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    XI_JSON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    tableName: 'SXI'
  });
};
