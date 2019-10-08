/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QD8010', {
    QD8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QD8_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QD8_ANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QD8_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QD8_FILDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QD8_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QD8_SELECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QD8_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QD8_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QD8_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QD8_BAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QD8_HISTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    tableName: 'QD8010'
  });
};
