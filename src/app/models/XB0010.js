/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('XB0010', {
    XB0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    XB0_PROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    XB0_SOURCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XB0_URL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    XB0_WS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    XB0_SENDER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XB0_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XB0_MODEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XB0_USR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    XB0_METH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    XB0_RP: {
      type: "VARBINARY",
      allowNull: true
    },
    XB0_INTID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
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
    tableName: 'XB0010'
  });
};
