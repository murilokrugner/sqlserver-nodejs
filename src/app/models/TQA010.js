/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TQA010', {
    TQA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TQA_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQA_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQA_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TQA_DTORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TQA_DTREAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TQA_POSCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TQA_DTLEI1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TQA_HORAC1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TQA_POSCO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TQA_DTLEI2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TQA_HORAC2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TQA_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQA_TERMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQA_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TQA_CENTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQA_RETORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQA_USUCAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TQA_USULEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
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
    tableName: 'TQA010'
  });
};
