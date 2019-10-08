/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QE0010', {
    QE0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE0_ANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QE0_MES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE0_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QE0_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QE0_INDICE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QE0_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'QE0010'
  });
};
