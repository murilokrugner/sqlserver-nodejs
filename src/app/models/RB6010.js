/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RB6010', {
    RB6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RB6_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RB6_DESCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RB6_TIPOVL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RB6_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RB6_FAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RB6_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RB6_PTOMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RB6_PTOMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RB6_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RB6_DTREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RB6_COEFIC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RB6_REGIAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RB6_ATUAL: {
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
    tableName: 'RB6010'
  });
};
