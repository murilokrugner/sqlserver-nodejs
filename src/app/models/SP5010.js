/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SP5010', {
    P5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P5_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    P5_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    P5_HORA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P5_CODREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P5_TIPOREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P5_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P5_SEQMARC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P5_GERAFOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P5_PD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    P5_PDEMPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    P5_VALREF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P5_DESCFUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P5_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P5_RELOGIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    P5_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P5_APONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P5_DATAAPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    P5_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    P5_PERIODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    P5_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    P5_NUMPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P5_POSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P5_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P5_CODFUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    tableName: 'SP5010'
  });
};
