/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MPUPDLOG', {
    E_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E_TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E_DATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E_TIME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    E_EVENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E_PROCESS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E_EMPRESA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E_CALL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                                                                            '
    },
    E_LOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                                                                            '
    },
    E_VALOLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    E_VALNEW: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    E_STACK: {
      type: DataTypes.STRING,
      allowNull: true
    },
    E_SEVERITY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E_TABLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    E_ATTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    E_KEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    E_RSTART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E_RFINISH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    tableName: 'MPUPDLOG'
  });
};
