/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SBK990', {
    BK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BK_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BK_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BK_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BK_QINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    BK_QISEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    BK_LOTECTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BK_NUMLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BK_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BK_NUMSERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BK_PRIOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    }
  }, {
    tableName: 'SBK990'
  });
};
