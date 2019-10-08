/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SGL010', {
    GL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GL_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GL_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GL_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GL_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GL_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
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
    tableName: 'SGL010'
  });
};
