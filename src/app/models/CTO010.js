/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTO010', {
    CTO_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTO_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTO_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CTO_SIMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CTO_BLOQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTO_TXPRJ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTO_METPRJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTO_DECIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTO_CRITER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTO_TXINF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTO_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTO_DTFINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTO_CLSMOE: {
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
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTO_CODISO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'CTO010'
  });
};
