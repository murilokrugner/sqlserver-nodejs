/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MGV010', {
    MGV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MGV_METODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MGV_PARCEL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MGV_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    MGV_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MGV_ADMFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MGV_SITPED: {
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
    tableName: 'MGV010'
  });
};
