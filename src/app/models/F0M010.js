/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('F0M010', {
    F0M_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F0M_REGRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F0M_SITUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F0M_DTFECH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F0M_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    F0M_CST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F0M_BASICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F0M_ALIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F0M_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F0M_MVA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F0M_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F0M_VALCMD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F0M_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F0M_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F0M_TOTICM: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    F0M_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F0M_VUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F0M_TPCF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F0M_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    }
  }, {
    tableName: 'F0M010'
  });
};
