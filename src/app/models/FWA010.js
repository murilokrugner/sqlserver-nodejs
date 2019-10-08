/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FWA010', {
    FWA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FWA_IDDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FWA_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FWA_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FWA_PARCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FWA_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FWA_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FWA_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FWA_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FWA_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FWA_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'FWA010'
  });
};
