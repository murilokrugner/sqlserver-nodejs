/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TF0010', {
    TF0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TF0_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TF0_TPRECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TF0_MENNOT: {
      type: "IMAGE",
      allowNull: true
    },
    TF0_CODCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TF0_CODRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TF0_DTCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TF0_HRCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TF0_NUMMTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TF0_PESOTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TF0_UNIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TF0_PESOBA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TF0_UNIBAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TF0_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TF0_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TF0_PROCED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TF0_CODTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TF0_CODTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TF0_EMPGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TF0_FILGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TF0_LICGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TF0_RESPEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TF0_DTEGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TF0_CDTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TF0_RESPTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TF0_CODMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TF0_DTRTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TF0_FORREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TF0_LOJREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TF0_RESPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TF0_CARGRR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TF0_DTEREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TF0_CONPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TF0_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TF0_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TF0_PREVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TF0_DTALTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TF0_HRALTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TF0_TPDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TF0_FORNNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TF0_LOJANF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TF0_MENPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TF0_ESPEC1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TF0_PESOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TF0_PBRUTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TF0_VOLUM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'TF0010'
  });
};
