/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RCB010', {
    RCB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RCB_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RCB_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RCB_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RCB_CAMPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RCB_DESCPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    RCB_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCB_TAMAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCB_DECIMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RCB_PICTUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                             '
    },
    RCB_VALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                        '
    },
    RCB_PADRAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RCB_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RCB_PESQ: {
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
    RCB_SHOWMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCB_MODULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RCB_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    }
  }, {
    tableName: 'RCB010'
  });
};
