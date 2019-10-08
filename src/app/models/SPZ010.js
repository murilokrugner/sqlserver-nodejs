/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPZ010', {
    PZ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PZ_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PZ_VISITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PZ_CRACHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    PZ_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PZ_HORA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PZ_RELOGIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PZ_TPMARCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PZ_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PZ_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PZ_GIRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    tableName: 'SPZ010'
  });
};
