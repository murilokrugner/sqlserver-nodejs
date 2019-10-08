/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED093', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CODINFORME: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    INFORME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DATA_REF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    COD_DECL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DESC_DECL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    XML_ERP: {
      type: "IMAGE",
      allowNull: true
    },
    XML_RET: {
      type: "IMAGE",
      allowNull: true
    },
    XML_CONVER: {
      type: "IMAGE",
      allowNull: true
    },
    STATUS_TSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    ERROSTATUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    STATUSDESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    ERROGERAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    GERALDESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    AMBIENTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED093'
  });
};
