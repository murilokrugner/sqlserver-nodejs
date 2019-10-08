/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QP5010', {
    QP5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP5_EQUIPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP5_RESPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QP5_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'QP5010'
  });
};
