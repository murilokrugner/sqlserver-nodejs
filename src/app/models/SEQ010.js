/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEQ010', {
    EQ_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EQ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EQ_BORDERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EQ_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EQ_AGENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EQ_NUMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EQ_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EQ_PESSOA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EQ_CONFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EQ_TXANUAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EQ_TOTBORD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EQ_TOTSERV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EQ_DTNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EQ_DTCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EQ_CONTATO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EQ_FUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EQ_VLRFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EQ_VLRFUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EQ_VLRBCO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EQ_VLRPRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EQ_DIAAGRU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EQ_VLRENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EQ_VLRIOC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'SEQ010'
  });
};
