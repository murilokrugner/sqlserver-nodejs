/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCD010', {
    TCD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TCD_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCD_DTCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TCD_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TCD_FONTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCD_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TCD_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCD_ASPECT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCD_IMPACT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCD_OBSERV: {
      type: "IMAGE",
      allowNull: true
    },
    TCD_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TCD_HRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    },
    TCD_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TCD_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TCD_CODPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCD_CODDAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'TCD010'
  });
};
