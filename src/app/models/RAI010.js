/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RAI010', {
    RAI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RAI_CALEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RAI_CURSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RAI_TURMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RAI_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RAI_TESTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RAI_QUESTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RAI_ALTERN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RAI_MRESPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RAI_RESULT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RAI_DURACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RAI_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RAI_QUEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RAI_MATAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'RAI010'
  });
};
