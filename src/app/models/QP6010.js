/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QP6010', {
    QP6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP6_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QP6_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP6_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP6_CODREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP6_DESCPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QP6_DESCIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QP6_DESCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QP6_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP6_APLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    QP6_CROQUI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QP6_DTCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP6_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP6_CADR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    QP6_DTDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP6_RVDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP6_PTOLER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QP6_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP6_DOCOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP6_SITPRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP6_DESSTP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QP6_TMPLIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QP6_SHLF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QP6_TPSLIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP6_UNMED1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP6_DUNME1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QP6_UNAMO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP6_DUNAM1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QP6_FATCO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QP6_TIPCO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP6_UNMED2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP6_DUNME2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QP6_UNAMO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP6_DUNAM2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QP6_FATCO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QP6_TIPCO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP6_SKPLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP6_DESCLT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                   '
    },
    QP6_FLUXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP6_CODANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    QP6_RESULT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP6_HISTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QP6_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP6_REVIGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP6_SITREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    QP6_ALTESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'QP6010'
  });
};
