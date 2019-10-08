/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VE8010', {
    VE8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VE8_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VE8_GRUKIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VE8_CODKIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                           '
    },
    VE8_GRUITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VE8_CODITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                           '
    },
    VE8_QTDADE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VE8_PERPEC: {
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
    tableName: 'VE8010'
  });
};
