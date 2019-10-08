/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TUB010', {
    TUB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TUB_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TUB_OPCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TUB_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TUB_FILTRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TUB_MARCA: {
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
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    TUB_GRPUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TUB_TIPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TUB_RESTRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    }
  }, {
    tableName: 'TUB010'
  });
};
