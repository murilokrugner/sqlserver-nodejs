/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FRP010', {
    FRP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FRP_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FRP_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FRP_LIMMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FRP_LIMMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FRP_CODSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FRP_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FRP_LIMITE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FRP_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FRP_LIMTIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FRP_MSBLQL: {
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
    tableName: 'FRP010'
  });
};
