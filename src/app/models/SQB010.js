/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SQB010', {
    QB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QB_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QB_DESCRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QB_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QB_REGIAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QB_FILRESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QB_MATRESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QB_DEPSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QB_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    QB_FILTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QB_ARELIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QB_MATTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QB_KEYINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    }
  }, {
    tableName: 'SQB010'
  });
};
