/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('XXL010', {
    XXL_CODFLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    XXL_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    XXL_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    XXL_ATTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    XXL_IDIOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    XXL_TEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                       '
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
    }
  }, {
    tableName: 'XXL010'
  });
};
