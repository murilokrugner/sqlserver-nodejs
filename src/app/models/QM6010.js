/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QM6010', {
    QM6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM6_INSTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QM6_REVINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM6_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QM6_CSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM6_DATINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QM6_LAUDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM6_FILRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM6_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QM6_DTPREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QM6_TOTHOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QM6_VALDAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QM6_COND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM6_REPEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QM6_INCERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QM6_ERSIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QM6_FLGEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM6_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QM6_REVTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM6_ADEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM6_ACEIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM6_EXAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM6_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QM6_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM6_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM6_INVSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM6_COTEAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QM6_CODDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QM6_REVDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'QM6010'
  });
};
