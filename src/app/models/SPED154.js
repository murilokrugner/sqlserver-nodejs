/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED154', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ID_EVENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                      '
    },
    LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TPEVENTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    SEQEVENTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    NFE_CHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    AMBIENTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DATE_EVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIME_EVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    STATUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DATE_TRANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIME_TRANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DHREGEVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VERSAO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    VEREVENTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    VERTPEVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    VERAPLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CORGAO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CSTATENV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CMOTENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    CSTATEVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CMOTEVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    XML_ERP: {
      type: "IMAGE",
      allowNull: true
    },
    XML_SIG: {
      type: "IMAGE",
      allowNull: true
    },
    XML_RET: {
      type: "IMAGE",
      allowNull: true
    },
    PROTOCOLO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    TOTVSCOLAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NUMDOCNEOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    STATDOCNEO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    IDENTCOLAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
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
    REC_REF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED154'
  });
};
