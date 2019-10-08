/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SCHDTSK', {
    TSK_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TSK_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TSK_ENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                   '
    },
    TSK_EMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TSK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TSK_USERID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TSK_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TSK_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TSK_MODULO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TSK_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TSK_EXEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TSK_TENTAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TSK_PARM: {
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
    },
    TSK_DIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'SCHDTSK'
  });
};
