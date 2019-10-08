/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SH1010', {
    H1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    H1_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H1_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    H1_LINHAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    H1_MAOOBRA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H1_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    H1_ULTMANU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    H1_PERIODI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H1_IDAPROV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H1_CTRAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H1_CALEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    H1_ILIMITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    H1_CONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H1_INTERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    H1_GCCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    tableName: 'SH1010'
  });
};
