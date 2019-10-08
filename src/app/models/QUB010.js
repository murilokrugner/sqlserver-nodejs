/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QUB010', {
    QUB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUB_NUMAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QUB_MOTAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUB_TIPAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QUB_REFAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QUB_INIAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QUB_ENCAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QUB_ENCREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QUB_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUB_AUDLID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QUB_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QUB_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUB_AUDRSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QUB_IQS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QUB_DESCHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QUB_PONOBT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QUB_PONPOS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QUB_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUB_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QUB_SUGCHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QUB_STATUS: {
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
    tableName: 'QUB010'
  });
};
