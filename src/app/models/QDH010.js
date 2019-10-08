/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QDH010', {
    QDH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDH_CODTP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QDH_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QDH_RV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QDH_DTOIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QDH_DTODES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QDH_CODASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QDH_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    QDH_NORMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QDH_FILDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDH_DEPTOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QDH_CODAS1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QDH_CODAS2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QDH_CODAS3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QDH_CODAS4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QDH_DTVIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QDH_DTLIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QDH_DTIMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QDH_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QDH_DEPTOE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QDH_DTCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QDH_DOCGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QDH_HORCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QDH_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDH_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QDH_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QDH_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QDH_OBSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QDH_NOMDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    QDH_CANCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QDH_TREINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QDH_QUEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QDH_FUTURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QDH_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QDH_SIGILO: {
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
    }
  }, {
    tableName: 'QDH010'
  });
};
