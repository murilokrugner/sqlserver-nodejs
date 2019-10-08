/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SNG990', {
    NG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NG_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NG_DESCRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    NG_TXDEPR1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    NG_TXDEPR2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    NG_TXDEPR3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    NG_TXDEPR4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    NG_TXDEPR5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    NG_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_SUBCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_DTBLOQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NG_CCONTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NG_CDEPREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NG_CCDEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NG_CDESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NG_CCORREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NG_CUSTBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_CCDESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_CCCDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_CCCDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_CCCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_SUBCCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_SUBCDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_SUBCCDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_SUBCDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_SUBCCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_CLVLCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_CLVLDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_CLVLCDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_CLVLDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_CLVLCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NG_TAXAPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NG_DETPATR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NG_UTIPATR: {
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
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    },
    NG_VMXDEPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NG_CRIDEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    NG_CALDEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    NG_TPSALDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NG_TPDEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SNG990'
  });
};
