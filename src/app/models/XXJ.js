/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('XXJ', {
    XXJ_CODE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XXJ_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XXJ_ADAPT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    XXJ_TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XXJ_LAYOUT: {
      type: "IMAGE",
      allowNull: true
    },
    XXJ_ACTIVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XXJ_LAOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
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
    tableName: 'XXJ'
  });
};
