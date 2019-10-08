/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('XX1', {
    XX1_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    XX1_USERID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    XX1_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    XX1_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XX1_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    XX1_RECORR: {
      type: "IMAGE",
      allowNull: true
    },
    XX1_ENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                   '
    },
    XX1_PARAM: {
      type: "IMAGE",
      allowNull: true
    },
    XX1_MODULO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    XX1_ULTDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XX1_ULTHOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    XX1_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XX1_DESCR: {
      type: "IMAGE",
      allowNull: true
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
    tableName: 'XX1'
  });
};
