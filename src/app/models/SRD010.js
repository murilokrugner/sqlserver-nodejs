/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SRD010', {
    RD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD_PD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RD_TIPO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD_QTDSEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RD_HORINFO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RD_HORAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RD_VALINFO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RD_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RD_VNAOAPL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RD_DATARQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD_DATPGT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RD_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RD_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD_EMPRESA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD_TIPO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD_MES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD_INSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD_IR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD_FGTS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RD_PERIODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD_SEMANA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RD_DTREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RD_POSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RD_NUMID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                          '
    },
    RD_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RD_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RD_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD_PLNUCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    RD_CODB1T: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    RD_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RD_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RD_EMPCONS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    RD_CRITER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD_IDCMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD_SEQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD_LOTPLS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RD_CODRDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD_VALORBA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RD_CONVOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'SRD010'
  });
};
