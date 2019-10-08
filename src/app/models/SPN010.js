/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPN010', {
    PN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PN_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PN_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PN_HORA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PN_CODREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PN_TIPOREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PN_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PN_SEQMARC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PN_GERAFOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PN_PD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PN_PDEMPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PN_VALREF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PN_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PN_DESCFUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PN_RELOGIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PN_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PN_APONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PN_DATAAPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PN_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    PN_PERIODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PN_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PN_NUMPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PN_POSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PN_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PN_CODFUNC: {
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
    tableName: 'SPN010'
  });
};
