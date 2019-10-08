/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SH8010', {
    H8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    H8_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    H8_OPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    H8_RECURSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H8_FERRAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H8_HRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    H8_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    H8_HRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    H8_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    H8_DTIDEAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    H8_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    H8_HRIDEAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    H8_BITINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H8_BITFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H8_SEQPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    H8_CTRAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H8_USO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H8_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H8_DESDOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    H8_BITUSO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H8_SUBDIV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H8_ROTEIRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    H8_SEQROTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    H8_SEQCARG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H8_SETUP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H8_TEMPEND: {
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
    tableName: 'SH8010'
  });
};
