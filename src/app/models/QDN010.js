/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QDN010', {
    QDN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDN_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QDN_RV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QDN_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDN_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QDN_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QDN_DTGERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QDN_HRGERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QDN_TPPEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QDN_TPRCBT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QDN_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    tableName: 'QDN010'
  });
};
