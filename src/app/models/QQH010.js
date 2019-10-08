/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QQH010', {
    QQH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QQH_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QQH_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QQH_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QQH_ENSAIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QQH_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QQH_AMOST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QQH_NIVAMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QQH_NQA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QQH_CODREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QQH_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QQH_REVIGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QQH_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
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
    tableName: 'QQH010'
  });
};
