/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FV0010', {
    FV0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FV0_UGEMIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FV0_TIPODC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FV0_CODSIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    FV0_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FV0_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FV0_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FV0_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FV0_UGPAGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FV0_SISORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FV0_DTEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FV0_DTVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FV0_TAXACA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FV0_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FV0_ATESTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FV0_VLRDOC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FV0_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    FV0_ADICIO: {
      type: "IMAGE",
      allowNull: true
    },
    FV0_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FV0_DATPAG: {
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
    }
  }, {
    tableName: 'FV0010'
  });
};
