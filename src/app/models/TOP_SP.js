/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TOP_SP', {
    SP_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    SP_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    SP_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    SP_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    SP_ASSINAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'TOP_SP'
  });
};
