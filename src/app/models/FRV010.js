/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FRV010', {
    FRV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FRV_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FRV_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    FRV_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FRV_DESCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FRV_PROTES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FRV_PERCEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FRV_NATIOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FRV_BLQMOV: {
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
    tableName: 'FRV010'
  });
};
