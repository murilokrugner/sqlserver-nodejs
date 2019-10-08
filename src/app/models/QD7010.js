/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QD7010', {
    QD7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QD7_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QD7_RV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QD7_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QD7_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QD7_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QD7_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    tableName: 'QD7010'
  });
};
