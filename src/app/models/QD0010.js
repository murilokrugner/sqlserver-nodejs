/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QD0010', {
    QD0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QD0_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QD0_RV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QD0_AUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QD0_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QD0_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QD0_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QD0_TLIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QD0_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QD0_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QD0_ANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QD0_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QD0_EDITDO: {
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
    tableName: 'QD0010'
  });
};
