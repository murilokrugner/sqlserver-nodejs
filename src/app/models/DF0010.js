/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DF0010', {
    DF0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DF0_NUMAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DF0_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DF0_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DF0_SEQEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DF0_QTDITE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DF0_QTDCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DF0_DATCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DF0_DATCAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DF0_CODOBC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DF0_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DF0_TIPDIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DF0_INIDIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DF0_TOTDIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DF0_CODOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DF0_DISTIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DF0_CODSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DF0_OLDSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    DF0_NUMMRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    }
  }, {
    tableName: 'DF0010'
  });
};
