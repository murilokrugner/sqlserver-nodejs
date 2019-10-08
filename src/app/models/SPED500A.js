/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED500A', {
    ENTIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AMBIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    DTTRANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRTRANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CODRECEITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DSCRECEITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                               '
    },
    XMLLOTE: {
      type: "VARBINARY",
      allowNull: true
    },
    XMLRETLOTE: {
      type: "VARBINARY",
      allowNull: true
    },
    LOGID: {
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
    tableName: 'SPED500A'
  });
};
