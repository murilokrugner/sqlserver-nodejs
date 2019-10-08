/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QPK010', {
    QPK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPK_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    QPK_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QPK_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPK_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPK_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPK_TAMLOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QPK_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QPK_NUMSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QPK_QTREJ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QPK_DTPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPK_EMISSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPK_SITOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QPK_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPK_LAUDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QPK_CERQUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    QPK_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QPK_LOJA: {
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
    tableName: 'QPK010'
  });
};
