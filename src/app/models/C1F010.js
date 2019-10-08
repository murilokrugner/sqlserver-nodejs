/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C1F010', {
    C1F_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C1F_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C1F_UFST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C1F_IEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    C1F_VALIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C1F_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    C1F_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'C1F010'
  });
};
