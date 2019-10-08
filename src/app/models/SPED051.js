/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED051', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    NFSE_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    NFSE_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DATE_NFSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIME_NFSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    NFSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    XML_ERP: {
      type: "IMAGE",
      allowNull: true
    },
    XML_CANC: {
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
    NFSE_PROT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    DELETEDATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CNPJDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    PRINT_DOC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    PED_NFSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DATE_ENFSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIME_ENFSE: {
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
    RESP_GXML: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    MOD_TRANSM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    STATUS_TXT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    STATCANTXT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    SERIE_RPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RPS_SUBST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                               '
    },
    TIPO_RPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    NFSE_SUBST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    XML_COMPL: {
      type: "IMAGE",
      allowNull: true
    },
    TOTVSCOLAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LOTE_PROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CNPJ_FORNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CODCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    XML_TSS: {
      type: "IMAGE",
      allowNull: true
    },
    RPS_TSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    SRPS_TSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DATE_EMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIME_EMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XMLRET_TSS: {
      type: "IMAGE",
      allowNull: true
    },
    SRPS_SUBST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    LINK_NFSE: {
      type: "IMAGE",
      allowNull: true
    },
    IDNEOGRID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    STATUSNEO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DESCNEO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                               '
    },
    DATAENVIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HORAENVIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DATACONSUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HORACONSUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIPOENTSAI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    REQ_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DT_VALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    SEQ_RPS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SPED051'
  });
};
