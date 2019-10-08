/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TQI010', {
    TQI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TQI_CODPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQI_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TQI_TANQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TQI_CODCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TQI_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TQI_FABRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQI_CAPNOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TQI_CAPMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TQI_INSTAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQI_DIAMET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TQI_INCLIN: {
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
    tableName: 'TQI010'
  });
};
