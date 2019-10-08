/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GWH010', {
    GWH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GWH_NRDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    GWH_CDTPDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GWH_EMISDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GWH_SERDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    GWH_NRCALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWH_TRECHO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GWH_SDOCDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'GWH010'
  });
};
