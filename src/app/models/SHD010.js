/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SHD010', {
    HD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    HD_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    HD_OPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    HD_RECURSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    HD_FERRAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    HD_HRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    HD_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HD_HRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    HD_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HD_DTIDEAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HD_HRIDEAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    HD_BITINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    HD_BITFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    HD_SEQPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    HD_CTRAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    HD_USO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    HD_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    HD_DESDOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    HD_BITUSO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    HD_DATRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HD_ROTEIRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    HD_SETUP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    HD_TEMPEND: {
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
    tableName: 'SHD010'
  });
};
