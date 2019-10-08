/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NQH010', {
    NQH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NQH_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NQH_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    NQH_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NQH_CCOMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NQH_CLOC2N: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NQH_CLOC3N: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    tableName: 'NQH010'
  });
};
