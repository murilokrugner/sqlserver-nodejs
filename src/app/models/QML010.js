/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QML010', {
    QML_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QML_INSTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QML_REVINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QML_DTRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QML_HRRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QML_DTCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QML_HRCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QML_DTLIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QML_FREQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QML_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QML_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QML_RESCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QML_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QML_REVTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QML_RESRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QML_FLAGB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QML_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QML_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QML_FILREL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QML_FILRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    QML_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    }
  }, {
    tableName: 'QML010'
  });
};
