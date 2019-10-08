/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SRR010', {
    RR_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RR_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RR_PD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RR_TIPO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RR_HORAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RR_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RR_TIPO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RR_AUXIL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RR_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RR_TIPO3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RR_PERIODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RR_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RR_SEMANA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RR_DATAPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RR_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RR_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RR_NUMID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                          '
    },
    RR_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RR_CLVL: {
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
    },
    RR_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RR_IDCMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RR_DTREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RR_CODB1T: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    RR_VALORBA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SRR010'
  });
};
