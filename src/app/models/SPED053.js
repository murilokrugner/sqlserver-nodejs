/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED053', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LOTE_PROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
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
    DATE_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIME_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CSTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    XMOT_SEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    RECIBO_SEF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DTREC_SEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRREC_SEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TEMPO_SEF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CSTAT_SEFR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    XMOT_SEFR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    STATUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    XML_LOTE: {
      type: "IMAGE",
      allowNull: true
    },
    NRCNS_SEFR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RECIBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XML_RET: {
      type: "IMAGE",
      allowNull: true
    },
    XML_LCOMPL: {
      type: "IMAGE",
      allowNull: true
    },
    TOTVSCOLAB: {
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
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED053'
  });
};
