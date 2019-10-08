/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VV9010', {
    VV9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV9_NUMATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV9_NOMVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VV9_DATVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV9_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV9_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV9_CODMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV9_MODVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VV9_MOTVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    VV9_TELVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VV9_SENNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV9_TIPMID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV9_OBSMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV9_CRMOK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV9_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV9_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV9_DATCAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV9_VEND1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV9_USUARI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV9_PEDFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    VV9_VEND2: {
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
    VV9_HORVIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV9_FILNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV9_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'VV9010'
  });
};
