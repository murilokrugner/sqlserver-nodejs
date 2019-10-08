/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QKS010', {
    QKS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKS_PECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKS_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKS_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKS_NPERG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKS_RPOSTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKS_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKS_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKS_DTPREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKS_DTREVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKS_RESPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKS_PREPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    QKS_FILRES: {
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
    tableName: 'QKS010'
  });
};
