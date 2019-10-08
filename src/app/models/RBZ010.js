/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RBZ010', {
    RBZ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RBZ_CODUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RBZ_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RBZ_ACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RBZ_EMPIDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RBZ_FILIDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RBZ_CODIDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RBZ_EMPVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RBZ_FILVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RBZ_CODVIS: {
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
    }
  }, {
    tableName: 'RBZ010'
  });
};
