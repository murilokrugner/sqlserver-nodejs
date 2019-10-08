/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TSX010', {
    TSX_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TSX_NUMREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TSX_DTSOLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TSX_REQUIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TSX_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    TSX_EMPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TSX_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TSX_NROCPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TSX_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TSX_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TSX_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TSX_MMOBS: {
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
    }
  }, {
    tableName: 'TSX010'
  });
};
