/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYA010', {
    YA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    YA_CODGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    YA_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    YA_SIGLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    YA_IDIOMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    YA_NOIDIOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    YA_DINALAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    YA_NALADI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    YA_ALADI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    YA_COMUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    YA_MERCOSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    YA_SGPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    YA_LI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    YA_ABICS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    YA_PAIS_I: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    YA_SISEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    YA_CODRIEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    YA_CODFIES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    YA_SGLMEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    YA_NASCIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
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
    },
    YA_CODERP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    YA_PAISDUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'SYA010'
  });
};
