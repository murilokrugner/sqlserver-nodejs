/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QKN010', {
    QKN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKN_PECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKN_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKN_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKN_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QKN_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QKN_SIMB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKN_SIMB2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKN_NOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QKN_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QKN_APRPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QKN_DTAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKN_CHAVE: {
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
    tableName: 'QKN010'
  });
};
