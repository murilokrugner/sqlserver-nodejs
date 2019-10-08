/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CF3010', {
    CF3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF3_PERORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CF3_PERUTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CF3_REGIME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF3_VLRPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF3_VLRCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF3_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF3_NFORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CF3_NFDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    tableName: 'CF3010'
  });
};
