/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED050L', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NFE_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    DATE_NFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIME_NFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XML_ERP: {
      type: "IMAGE",
      allowNull: true
    },
    XML_SIG: {
      type: "IMAGE",
      allowNull: true
    },
    XML_SIGCAN: {
      type: "IMAGE",
      allowNull: true
    },
    AMBIENTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    MODALIDADE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    STATUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    ERRCODE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    ERRMSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    EVENTCODE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    EVENTMSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    STATUSCANC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    STATUSMAIL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    NFE_PROT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DELETEDATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DATE_ENFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIME_ENFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DATE_GXML: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIME_GXML: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PTO_VTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CBTE_TIPO: {
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
    IDCONSULTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED050L'
  });
};
