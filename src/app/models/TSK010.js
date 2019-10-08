/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TSK010', {
    TSK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TSK_FILMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TSK_CODFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TSK_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TSK_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    TSK_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TSK_TIPUSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TSK_LISTWF: {
      type: "IMAGE",
      allowNull: true
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
    tableName: 'TSK010'
  });
};
