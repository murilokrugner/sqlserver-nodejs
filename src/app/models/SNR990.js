/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SNR990', {
    NR_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NR_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NR_REVISAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NR_NRITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NR_FILBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NR_TPMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NR_ACMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NR_NPERIOD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NR_CCDEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NR_CCCDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NR_SUBCCDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NR_CLVLCDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NR_TXDEPR1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NR_TXDEPR2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NR_TXDEPR3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NR_TXDEPR4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NR_TXDEPR5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NR_VLRMOD1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NR_VLRMOD2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NR_VLRMOD3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NR_VLRMOD4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NR_VLRMOD5: {
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
    }
  }, {
    tableName: 'SNR990'
  });
};
