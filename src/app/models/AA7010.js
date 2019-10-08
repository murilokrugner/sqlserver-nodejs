/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AA7010', {
    AA7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA7_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AA7_CODPRB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA7_GRPATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA7_TMPSTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AA7_TALOC1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AA7_TALOC2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AA7_TMAX1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AA7_TMAX2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AA7_TCHEG1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AA7_TCHEG2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AA7_TSAID1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AA7_TSAID2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AA7_TATEN1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AA7_TATEN2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AA7_HABIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA7_NIVEL: {
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
    tableName: 'AA7010'
  });
};
