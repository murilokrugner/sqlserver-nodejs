/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ACY010', {
    ACY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACY_GRPVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACY_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    ACY_GRPSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACY_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    },
    ACY_MSEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACY_HREXPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACY_USERGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    ACY_USERGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    }
  }, {
    tableName: 'ACY010'
  });
};
