/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VCC010', {
    VCC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VCC_EMPCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VCC_NOMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    VCC_SITCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VCC_CODGRU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    VCC_NUMCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VCC_DATVDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VCC_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VCC_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VCC_NOMCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    VCC_QTDPAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCC_CODMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VCC_MODVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VCC_COMCOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCC_PERCOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCC_DATCTP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VCC_PERCTP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCC_OBSMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VCC_VALCRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCC_ENCGRU: {
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
    }
  }, {
    tableName: 'VCC010'
  });
};
