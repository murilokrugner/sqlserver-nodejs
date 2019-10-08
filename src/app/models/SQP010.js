/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SQP010', {
    QP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP_AREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QP_TOPICO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QP_QUESTAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QP_ALTERNA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP_DESCRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    QP_PERCENT: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SQP010'
  });
};
