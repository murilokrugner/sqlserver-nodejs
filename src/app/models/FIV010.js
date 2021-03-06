/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FIV010', {
    FIV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIV_NATUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FIV_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIV_TPSALD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIV_CARTEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIV_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIV_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FIV_ABATI: {
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
    FIV_PAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    }
  }, {
    tableName: 'FIV010'
  });
};
