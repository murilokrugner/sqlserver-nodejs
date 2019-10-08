/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DT7010', {
    DT7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT7_CODDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DT7_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DT7_CUSTO1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT7_CONEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT7_MOVBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT7_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DT7_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DT7_ITEMCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DT7_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DT7_UTICUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT7_CODFAM: {
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
    tableName: 'DT7010'
  });
};
