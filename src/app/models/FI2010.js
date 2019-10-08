/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FI2010', {
    FI2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI2_OCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI2_DESCOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FI2_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI2_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FI2_PARCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI2_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI2_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FI2_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI2_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FI2_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI2_GERADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FI2_NUMBOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FI2_CARTEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FI2_DTGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FI2_DTOCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FI2_VALANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    FI2_VALNOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    FI2_CAMPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FI2_TIPCPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FI2_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FI2_HISTOR: {
      type: "IMAGE",
      allowNull: true
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
    }
  }, {
    tableName: 'FI2010'
  });
};
