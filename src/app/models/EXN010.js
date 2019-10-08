/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EXN010', {
    EXN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EXN_PROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EXN_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EXN_NORMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EXN_ACORDO: {
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
    }
  }, {
    tableName: 'EXN010'
  });
};
