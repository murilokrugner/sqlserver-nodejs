/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TZ5010', {
    TZ5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TZ5_MODULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TZ5_CODIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TZ5_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TZ5_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    TZ5_CODCLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TZ5_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TZ5_UNIMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TZ5_TAMMED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TZ5_DECMED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TZ5_TIPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TZ5_VALOR1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TZ5_VALOR2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TZ5_TIPVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TZ5_FORCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                      '
    },
    TZ5_ATIVO: {
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
    }
  }, {
    tableName: 'TZ5010'
  });
};
