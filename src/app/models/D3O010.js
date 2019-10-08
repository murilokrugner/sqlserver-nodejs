/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('D3O010', {
    D3O_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3O_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    D3O_REG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D3O_DT_CON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D3O_COD_IT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    D3O_QTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D3O_COD_IN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    D3O_PERBLK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'D3O010'
  });
};
