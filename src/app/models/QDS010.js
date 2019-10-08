/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QDS010', {
    QDS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDS_DTGERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QDS_HRGERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QDS_TPPEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QDS_PENDEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QDS_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDS_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QDS_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QDS_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QDS_RV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QDS_FMATBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDS_MATBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QDS_DEPBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QDS_DTBAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QDS_HRBAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QDS_SIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QDS_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QDS_DOCREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QDS_RVREF: {
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
    tableName: 'QDS010'
  });
};
