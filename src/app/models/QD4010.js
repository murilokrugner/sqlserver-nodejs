/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QD4010', {
    QD4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QD4_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QD4_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QD4_RV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QD4_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QD4_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QD4_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QD4_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QD4_PENDEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QD4_TPPEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QD4_FMATBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QD4_MATBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QD4_DTBAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QD4_HRBAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QD4_DEPBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QD4_CHAVE: {
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
    tableName: 'QD4010'
  });
};
