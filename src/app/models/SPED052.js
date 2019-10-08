/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED052', {
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
    CSTAT_SEF: {
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
    DPEC: {
      type: "IMAGE",
      allowNull: true
    },
    HRREC_DPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTREC_DPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RECIBO_NSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XML_ERROS: {
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
    tableName: 'SPED052'
  });
};
