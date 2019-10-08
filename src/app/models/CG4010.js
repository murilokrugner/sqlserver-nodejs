/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CG4010', {
    CG4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CG4_PISCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CG4_PER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CG4_PERORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CG4_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CG4_VALORR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CG4_VALORC: {
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
    tableName: 'CG4010'
  });
};
