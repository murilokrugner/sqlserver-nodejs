/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FNI010', {
    FNI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FNI_CODIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FNI_DSCIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FNI_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FNI_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FNI_REVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FNI_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FNI_CURVIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FNI_CURVFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FNI_DTREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FNI_STATUS: {
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
    tableName: 'FNI010'
  });
};
