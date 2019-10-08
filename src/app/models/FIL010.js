/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FIL010', {
    FIL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIL_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FIL_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIL_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIL_AGENCI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    FIL_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FIL_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIL_DETRAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIL_MOEDA: {
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
    },
    FIL_DVAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIL_DVCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIL_TIPCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIL_MOVCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'FIL010'
  });
};
