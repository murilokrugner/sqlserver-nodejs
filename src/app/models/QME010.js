/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QME010', {
    QME_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QME_INSTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QME_REVINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QME_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QME_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QME_QTDHOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QME_LABOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QME_NRCERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QME_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QME_FILRES: {
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
    tableName: 'QME010'
  });
};
