/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TI3010', {
    TI3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TI3_PERMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TI3_SEQPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TI3_CODEPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    tableName: 'TI3010'
  });
};
