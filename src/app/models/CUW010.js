/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CUW010', {
    CUW_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CUW_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CUW_CODSCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CUW_INFCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                            '
    },
    CUW_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CUW_ATIVO: {
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
    tableName: 'CUW010'
  });
};
