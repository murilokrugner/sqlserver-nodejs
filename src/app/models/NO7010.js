/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NO7010', {
    NO7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NO7_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NO7_NUMCMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NO7_ADTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NO7_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NO7_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NO7_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NO7_DATEMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NO7_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NO7_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NO7_CONPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NO7_NUMPAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NO7_DATVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NO7_PERVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NO7_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NO7_CODBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NO7_HISTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                           '
    },
    NO7_CONTAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NO7_CCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NO7_ITEMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NO7_CLVLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    tableName: 'NO7010'
  });
};
