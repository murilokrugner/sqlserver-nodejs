/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WF3010', {
    WF3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    WF3_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    WF3_PROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    WF3_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    WF3_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    WF3_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    WF3_USU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    WF3_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    WF3_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
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
    tableName: 'WF3010'
  });
};
