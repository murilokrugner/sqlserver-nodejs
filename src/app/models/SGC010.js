/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SGC010', {
    GC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GC_RECURSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GC_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GC_ROTEIRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GC_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    GC_AUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GC_FERRAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GC_USOREST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GC_QUANRES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GC_LIMTEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GC_FIXAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GC_LIBERAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GC_SETUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GC_TEMPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    tableName: 'SGC010'
  });
};
