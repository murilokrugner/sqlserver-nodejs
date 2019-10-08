/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QER010', {
    QER_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QER_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QER_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QER_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QER_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QER_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QER_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QER_RASTRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QER_LABOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QER_ENSAIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QER_DTMEDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QER_HRMEDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QER_AMOSTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QER_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QER_ENSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QER_RESULT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QER_MBROWS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QER_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QER_METODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QER_RVDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QER_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QER_HRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QER_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QER_HRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QER_NISERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QER_TIPONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QER_NUMSEQ: {
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
    QER_NTFISC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QER_SERINF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QER_ITEMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QER_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'QER010'
  });
};
