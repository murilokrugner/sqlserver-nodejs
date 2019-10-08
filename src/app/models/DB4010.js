/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DB4010', {
    DB4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DB4_SIGLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DB4_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DB4_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DB4_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DB4_CIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DB4_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DB4_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DB4_CONTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DB4_FONES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DB4_FAX: {
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
    tableName: 'DB4010'
  });
};
