/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CDP010', {
    CDP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDP_TIPOIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDP_TIPOPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDP_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDP_LIVRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDP_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDP_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CDP_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CDP_CONSF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CDP_FILDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDP_FILATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDP_LINHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDP_CODLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                      '
    },
    CDP_SEQLIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDP_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    CDP_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CDP_NUMDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CDP_INDDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDP_PRETIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDP_NUMTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CDP_PARTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDP_TPTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    CDP_TPLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CDP010'
  });
};
