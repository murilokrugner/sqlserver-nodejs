/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TRA010_SP', {
    TRA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TRA_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRA_CF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TRA_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TRA_RNOAUX: {
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
    tableName: 'TRA010_SP'
  });
};
