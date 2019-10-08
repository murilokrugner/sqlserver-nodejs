/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GUY010', {
    GUY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GUY_CDEMIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GUY_NRTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GUY_NRNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GUY_CDCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUY_TOTFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GUY_BASIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GUY_BAPICO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GUY_FREMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GUY_REENT: {
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
    tableName: 'GUY010'
  });
};
