/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QKV010', {
    QKV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKV_PECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKV_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKV_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKV_NPERG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKV_RPOSTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKV_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKV_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKV_DTPREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKV_DTREVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKV_RESPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKV_PREPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    QKV_FILRES: {
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
    tableName: 'QKV010'
  });
};
