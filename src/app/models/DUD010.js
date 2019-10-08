/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DUD010', {
    DUD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUD_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUD_FILDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUD_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DUD_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUD_SERTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUD_TIPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUD_CDRDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUD_VIAGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUD_FILDCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUD_FILDPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUD_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUD_FILMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUD_MANIFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DUD_GERROM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUD_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUD_DOCBXE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DUD_SERBXE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUD_FILFEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUD_CDRCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUD_ENDERE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUD_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUD_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUD_STROTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUD_FILVGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUD_NUMVGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUD_DOCTRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUD_ZONA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUD_SETOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUD_SEQIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUD_SEQENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUD_FILATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUD_CEPENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DUD_CARMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUD_NUMRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUD_NUMROM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUD_SERMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUD_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUD_SDOCBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUD_SDOCMN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUD_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUD_UFORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUD_CDMUNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DUD_CEPORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DUD_UFDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUD_CDMUND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DUD_CEPDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DUD_TIPVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUD_CDTPOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DUD_CDCLFR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DUD_CHVEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DUD_DTRNPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DUD_HRRNPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DUD_USURNP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'DUD010'
  });
};
