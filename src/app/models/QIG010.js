/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QIG010', {
    QIG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QIG_FNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QIG_REVFNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QIG_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QIG_REVCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QIG_TPACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QIG_DTTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QIG_SEQTRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QIG_TPPEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QIG_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QIG_FILRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QIG_MATRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QIG_FILDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QIG_MATDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QIG_FILPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QIG_MATPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    }
  }, {
    tableName: 'QIG010'
  });
};
