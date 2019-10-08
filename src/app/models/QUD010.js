/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QUD010', {
    QUD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUD_NUMAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QUD_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUD_CHKLST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QUD_REVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUD_CHKITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QUD_QSTITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QUD_NOTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QUD_EVICHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QUD_DTAVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QUD_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QUD_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUD_CODAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QUD_APLICA: {
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
    tableName: 'QUD010'
  });
};
