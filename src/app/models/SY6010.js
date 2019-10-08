/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SY6010', {
    Y6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Y6_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    Y6_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Y6_DIAS_PA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_COM_LC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Y6_MDPGEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    Y6_PERC_01: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_DIAS_01: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_PERC_02: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_DIAS_02: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_PERC_03: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_DIAS_03: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_PERC_04: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_DIAS_04: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_PERC_05: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_DIAS_05: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_PERC_06: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_DIAS_06: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_PERC_07: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_DIAS_07: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_PERC_08: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_DIAS_08: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_PERC_09: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_DIAS_09: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_PERC_10: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_DIAS_10: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_DESC_P: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Y6_DESC_I: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Y6_TIPOCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Y6_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Y6_DIAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Y6_INST_FI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Y6_LIBORSP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y6_COBERTU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Y6_SIGSE4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    Y6_PROMES: {
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
    },
    Y6_CODERP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SY6010'
  });
};
