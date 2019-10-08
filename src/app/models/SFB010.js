/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFB010', {
    FB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FB_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FB_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    FB_CPOVREI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FB_CPOBAEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FB_CPOVREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FB_CPOBAEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FB_CPOVRSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FB_CPOBASI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FB_CPOVRSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FB_CPOBASC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FB_FORMENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                '
    },
    FB_FORMSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                '
    },
    FB_DIAVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FB_PERIODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FB_JNS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FB_CPOLVRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FB_RELACIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FB_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FB_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FB_LOJA: {
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
    },
    FB_IDHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    }
  }, {
    tableName: 'SFB010'
  });
};
