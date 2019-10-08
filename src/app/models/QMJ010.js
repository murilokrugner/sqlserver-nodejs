/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QMJ010', {
    QMJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMJ_INSTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QMJ_REVINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMJ_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QMJ_ESCALA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QMJ_PONTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QMJ_NAOCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QMJ_CLASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QMJ_FLGEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QMJ_CODNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QMJ_REVNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMJ_CSEQ: {
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
    }
  }, {
    tableName: 'QMJ010'
  });
};
