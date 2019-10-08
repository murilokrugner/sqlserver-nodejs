/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QKT010', {
    QKT_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKT_PECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKT_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKT_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKT_NPERG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKT_RPOSTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKT_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKT_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKT_DTPREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKT_DTREVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKT_RESPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKT_PREPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    QKT_FILRES: {
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
    tableName: 'QKT010'
  });
};
