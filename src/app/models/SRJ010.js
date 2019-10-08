/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SRJ010', {
    RJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RJ_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RJ_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RJ_CODCBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RJ_CBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RJ_MAOBRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RJ_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RJ_SALARIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RJ_VALDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RJ_DESCREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RJ_PPPIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RJ_LIDER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RJ_RHEXP: {
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
    RJ_ADTPFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RJ_ADTPJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RJ_ADTPESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RJ_ADATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RJ_ADTPROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RJ_ADHORAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RJ_ADDATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RJ_ACUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RJ_CTESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RJ_DEDEXC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RJ_LEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    RJ_DTLEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RJ_SIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SRJ010'
  });
};
