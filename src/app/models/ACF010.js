/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ACF010', {
    ACF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACF_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACF_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACF_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACF_CODCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACF_OPERAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACF_OPERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACF_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACF_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACF_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACF_CODOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACF_PENDEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACF_HRPEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ACF_INICIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACF_FIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACF_DIASDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ACF_HORADA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ACF_CODCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACF_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACF_QTDATE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ACF_CCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACF_OPERAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACF_CODENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACF_CODMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACF_ULTATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    ACF_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'ACF010'
  });
};
