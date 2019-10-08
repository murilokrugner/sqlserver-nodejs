/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QA1010', {
    QA1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QA1_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QA1_TAMAMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QA1_QI_QS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QA1_VLREPD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QA1_VLRGEN: {
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
    tableName: 'QA1010'
  });
};
