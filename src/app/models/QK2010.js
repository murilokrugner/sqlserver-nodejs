/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QK2010', {
    QK2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK2_PECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QK2_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK2_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK2_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QK2_CODCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK2_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QK2_ESPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QK2_TPCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QK2_PRODPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QK2_PLANOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QK2_TOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QK2_LIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QK2_LSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QK2_ESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QK2_SIMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK2_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK2_CHAVE: {
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
    tableName: 'QK2010'
  });
};
