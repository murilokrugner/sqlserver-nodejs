/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VE9010', {
    VE9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VE9_NROSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VE9_NROSUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VE9_GRUITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VE9_ITEANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                           '
    },
    VE9_ITENOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                           '
    },
    VE9_QTDADE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VE9_DATSUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VE9_QTDSUB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VE9_DATFIM: {
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
    VE9_GRUNOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    }
  }, {
    tableName: 'VE9010'
  });
};
