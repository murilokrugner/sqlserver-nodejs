/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TLA010', {
    TLA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TLA_CODEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TLA_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TLA_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TLA_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TLA_MARCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TLA_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TLA_CAPACI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TLA_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLA_DTMANU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TLA_DTRECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TLA_NUMFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TLA_PESOVZ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TLA_PESOCH: {
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
    TLA_ATIFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    TLA_ABNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TLA_UNIMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TLA_PESOUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'TLA010'
  });
};
