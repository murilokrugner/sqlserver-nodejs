/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QKC010', {
    QKC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKC_PECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKC_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKC_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKC_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QKC_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QKC_LABOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QKC_ASSFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKC_DTAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKC_CARAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKC_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QKC_NREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKC_FTEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKC_QTENS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKC_FLOK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKC_RESFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QKC_RESCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QKC_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKC_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
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
    tableName: 'QKC010'
  });
};
