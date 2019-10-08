/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QU4010', {
    QU4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QU4_CHKLST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QU4_REVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QU4_CHKITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QU4_QSTITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QU4_TXTCHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QU4_OBSCHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QU4_REQCHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QU4_FAIXIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QU4_FAIXFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QU4_ULTREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QU4_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QU4_USAALT: {
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
    tableName: 'QU4010'
  });
};
