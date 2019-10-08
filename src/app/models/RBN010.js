/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RBN010', {
    RBN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RBN_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RBN_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RBN_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RBN_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RBN_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RBN_ATIVID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RBN_DTALT: {
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
    }
  }, {
    tableName: 'RBN010'
  });
};
