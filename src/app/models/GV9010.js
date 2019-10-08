/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GV9010', {
    GV9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GV9_CDEMIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GV9_NRTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GV9_NRNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GV9_CDCLFR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    GV9_CDTPOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    GV9_DTVALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GV9_DTVALF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GV9_SIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_TPLOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_QTKGM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GV9_UNIFAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GV9_ATRFAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_ADISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_ADICMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_RATIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_COMIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GV9_COMMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GV9_DIFMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_FREROM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_PEDROM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_PESPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_COMFXE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GV9_FREVIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_TIPVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_QTDCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_DTCRIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GV9_HRCRIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GV9_USUCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    GV9_ENVAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_DTAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GV9_HRAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GV9_USUAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    GV9_MTVRPR: {
      type: "VARBINARY",
      allowNull: true
    },
    GV9_CFCOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GV9_CFALUG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GV9_CFEXCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GV9_CPLTS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    GV9_CODCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    GV9_SITMLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_MOTMLA: {
      type: "VARBINARY",
      allowNull: true
    },
    GV9_SEQCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GV9_AGRSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_SITCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_CDTPSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GV9_MOTCON: {
      type: "VARBINARY",
      allowNull: true
    },
    GV9_DTCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GV9_TPIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GV9_DESPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    tableName: 'GV9010'
  });
};
