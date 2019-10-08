/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QD1010', {
    QD1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QD1_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QD1_RV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QD1_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QD1_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QD1_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QD1_DTGERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QD1_HRGERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QD1_DTBAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QD1_HRBAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QD1_TPPEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QD1_PENDEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QD1_TPDIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QD1_LEUDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QD1_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QD1_APROVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QD1_FMATBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QD1_MATBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QD1_DEPBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QD1_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QD1_DISTNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QD1_SIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QD1_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QD1_ANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QD1_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QD1_NTRESP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'QD1010'
  });
};
