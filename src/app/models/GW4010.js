/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GW4010', {
    GW4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GW4_EMISDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GW4_CDESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GW4_SERDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GW4_NRDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    GW4_DTEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GW4_NRDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    GW4_TPDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GW4_SERDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    GW4_EMISDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GW4_SDOCDC: {
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
    tableName: 'GW4010'
  });
};
