/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QEL010', {
    QEL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEL_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QEL_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEL_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QEL_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEL_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEL_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QEL_LABOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QEL_DTENLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEL_HRENLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QEL_LAUDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QEL_DTLAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEL_HRLAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QEL_DTVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEL_TAMLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEL_QTDAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEL_QTREJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEL_QTDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEL_DTDILA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEL_HRDILA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QEL_JUSTLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QEL_NUMPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QEL_CHAVEH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QEL_NISERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QEL_TIPONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QEL_NUMSEQ: {
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
    },
    QEL_NTFISC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QEL_SERINF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QEL_ITEMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QEL_NOMRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QEL_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'QEL010'
  });
};
