/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TDI010', {
    TDI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TDI_CODCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TDI_CODRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TDI_DTCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TDI_HRCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TDI_NUMMTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TDI_PESOTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TDI_UNIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TDI_PESOBA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TDI_UNIBAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TDI_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TDI_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TDI_PROCED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TDI_CODTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TDI_DTALTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TDI_HRALTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TDI_EMPGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TDI_FILGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TDI_LICGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TDI_RESPEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TDI_DTEGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TDI_TPTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TDI_CDTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TDI_EMPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TDI_FILTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TDI_LICTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TDI_RESPTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TDI_CODMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TDI_NOMMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TDI_DTRTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TDI_CODREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TDI_RESPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TDI_CARGRR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TDI_DTEREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TDI_CONPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TDI_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TDI_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TDI_PREVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TDI_MENNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    TDI_MENPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TDI_ESPEC1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TDI_VOLUM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TDI_PESOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TDI_PBRUTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TDI_TPDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TDI_FORNNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TDI_LOJANF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TDI_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    },
    TDI_TIPDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TDI_CODTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'TDI010'
  });
};
