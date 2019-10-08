/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QAD010', {
    QAD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QAD_CUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QAD_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    QAD_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QAD_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QAD_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QAD_GRPTMK: {
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
    tableName: 'QAD010'
  });
};
