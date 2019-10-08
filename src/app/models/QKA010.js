/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QKA010', {
    QKA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKA_PECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKA_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKA_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKA_CARAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKA_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QKA_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKA_AMOS1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QKA_AMOS2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QKA_AMOS3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QKA_AMOS4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QKA_AMOS5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QKA_MEDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QKA_AMPLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
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
    tableName: 'QKA010'
  });
};
