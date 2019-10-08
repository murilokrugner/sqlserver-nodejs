/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SXH', {
    XH_EMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    XH_FIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    XH_CANAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    XH_CATEGOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    XH_EVENTID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    XH_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    XH_NIVEL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    XH_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    XH_OWNER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    XH_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XH_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XH_TITLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    XH_MESSAGE: {
      type: "VARBINARY",
      allowNull: true
    },
    XH_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    XH_USERID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    XH_DELETED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XH_PRIDISP: {
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
    tableName: 'SXH'
  });
};
