/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('XX0', {
    XX0_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    XX0_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    XX0_IP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    XX0_PORTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    XX0_ENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    XX0_EMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    XX0_THREAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    XX0_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XX0_ULTDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XX0_ULTHOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    tableName: 'XX0'
  });
};
