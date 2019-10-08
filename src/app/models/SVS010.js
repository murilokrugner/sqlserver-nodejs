/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SVS010', {
    VS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VS_MESSPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VS_ANOSPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VS_REG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VS_DTINIOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VS_DTFIMOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VS_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    VS_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VS_QTDENC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS_QTDORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VS_PRGORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    tableName: 'SVS010'
  });
};
