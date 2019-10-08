/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AOL010', {
    AOL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AOL_CODAGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AOL_RESUMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AOL_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AOL_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AOL_TERRIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AOL_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AOL_LOGTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AOL_LOGTAM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AOL_LOGDEC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AOL_LOGPIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
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
    AOL_ECFLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'AOL010'
  });
};
