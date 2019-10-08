/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QF6010', {
    QF6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QF6_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QF6_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QF6_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QF6_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QF6_ENSAIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QF6_TIPAMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QF6_PA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QF6_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QF6_PLAMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QF6_NQA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QF6_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
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
    tableName: 'QF6010'
  });
};
