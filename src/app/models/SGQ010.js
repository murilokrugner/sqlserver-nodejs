/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SGQ010', {
    GQ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GQ_TIPOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GQ_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GQ_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GQ_GRPUSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GQ_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    GQ_GRPPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
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
    tableName: 'SGQ010'
  });
};
