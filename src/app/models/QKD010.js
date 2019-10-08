/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QKD010', {
    QKD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKD_PECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKD_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKD_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKD_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QKD_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QKD_LABOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QKD_ASSFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKD_DTAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKD_TPTEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKD_CARAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKD_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QKD_FLOK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKD_RESFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QKD_RESCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QKD_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKD_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    QKD_FTESTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QKD_QTTEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QKD_DTENSA: {
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
    tableName: 'QKD010'
  });
};
