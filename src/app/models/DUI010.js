/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DUI010', {
    DUI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUI_DOCTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUI_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUI_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DUI_DOCFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUI_PRDCIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DUI_SUBSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUI_SEROUT: {
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
    tableName: 'DUI010'
  });
};
