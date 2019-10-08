/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QKU010', {
    QKU_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKU_PECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKU_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKU_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKU_NPERG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKU_RPOSTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKU_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKU_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKU_DTPREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKU_DTREVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKU_RESPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKU_PREPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    QKU_FILRES: {
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
    tableName: 'QKU010'
  });
};
