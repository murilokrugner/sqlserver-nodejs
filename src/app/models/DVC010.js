/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DVC010', {
    DVC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DVC_TABFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DVC_TIPTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DVC_SEQTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DVC_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DVC_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DVC_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DVC_CDRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DVC_CDRDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DVC_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DVC_CODNEG: {
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
    tableName: 'DVC010'
  });
};
