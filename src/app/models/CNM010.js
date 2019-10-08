/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CNM010', {
    CNM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CNM_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CNM_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNM_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CNM_CDAVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNM_NOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CNM_DTAVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNM_SITUAC: {
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
    tableName: 'CNM010'
  });
};
