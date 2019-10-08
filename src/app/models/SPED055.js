/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED055', {
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
    NFSE_CHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    CSTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DTREC_PROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRREC_PROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NFSE_PROT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XML_ERRO: {
      type: "IMAGE",
      allowNull: true
    },
    DTVER_LOTP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRVER_LOTP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TOTVSCOLAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NUMDOCNEOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    STATDOCNEO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    LOTE_PROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    tableName: 'SPED055'
  });
};
