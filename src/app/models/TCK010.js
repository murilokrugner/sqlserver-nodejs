/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCK010', {
    TCK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TCK_CODLEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TCK_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TCK_DESPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TCK_ORGAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TCK_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TCK_RESPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TCK_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TCK_CODLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TCK_MMOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCK_MMNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCK_MMNCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCK_QTDIAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TCK_DTALER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    tableName: 'TCK010'
  });
};
