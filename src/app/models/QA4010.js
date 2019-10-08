/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QA4010', {
    QA4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QA4_CODTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    QA4_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QA4_LIGDES: {
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
    }
  }, {
    tableName: 'QA4010'
  });
};
