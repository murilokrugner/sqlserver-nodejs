/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SR7010', {
    R7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    R7_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    R7_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    R7_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R7_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    R7_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    R7_DESCFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    R7_TIPOPGT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R7_CATFUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R7_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    R7_DESCCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    R7_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
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
    R7_EFUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    R7_EDESCFU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    R7_ECAFUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R7_ECARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    R7_EDESCCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    }
  }, {
    tableName: 'SR7010'
  });
};
