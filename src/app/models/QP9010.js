/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QP9010', {
    QP9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP9_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QP9_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP9_ENSAIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP9_NAOCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP9_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP9_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP9_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP9_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP9_REVIGR: {
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
    tableName: 'QP9010'
  });
};
