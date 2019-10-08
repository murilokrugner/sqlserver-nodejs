/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED050', {
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
    XML_DPEC: {
      type: "IMAGE",
      allowNull: true
    },
    CNPJDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    REG_DPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    STATUSDPEC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    XML_NSE: {
      type: "IMAGE",
      allowNull: true
    },
    NUM_NSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    PRINT_DOC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    PED_NFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    PED_DPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    RESP_GXML: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    CODCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    MODALCTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PATHIMPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    NRVIAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    FRENTVERS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AUT_COLAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TOTVSCOLAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TIPO_CANC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CLE_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    DOC_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DOC_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DOC_CHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    CNPJREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
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
    NUM_CONSNG: {
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
    VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    XML_TSS: {
      type: "VARBINARY",
      allowNull: true
    },
    LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    }
  }, {
    tableName: 'SPED050'
  });
};
