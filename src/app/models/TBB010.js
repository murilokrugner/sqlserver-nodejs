/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBB010', {
    TBB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TBB_CODPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TBB_DESPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TBB_ELABOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TBB_RESPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TBB_OBSPLA: {
      type: "IMAGE",
      allowNull: true
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
    TBB_TIPELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TBB_TIPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TBB_MODULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TBB_INDAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TBB010'
  });
};
