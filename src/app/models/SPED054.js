/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED054', {
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
    NFE_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    NFE_CHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
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
    DTREC_SEFR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRREC_SEFR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NFE_PROT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    XML_PROT: {
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
    TSMJOBEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    tableName: 'SPED054'
  });
};
