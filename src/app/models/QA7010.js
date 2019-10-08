/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QA7010', {
    QA7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QA7_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QA7_NQA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QA7_CODAMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QA7_SEQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QA7_AT_ACE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QA7_AT_REJ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QA7_AT_AMO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QA7_NO_ACE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QA7_NO_REJ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QA7_NO_AMO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QA7_NO_FOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QA7_SE_ACE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QA7_SE_REJ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QA7_SE_AMO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QA7_SE_FOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QA7_QS_AMO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'QA7010'
  });
};
