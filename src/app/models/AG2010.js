/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AG2010', {
    AG2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AG2_INCCAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AG2_SUBCAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AG2_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AG2_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AG2_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    AG2_COMPPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AG2_COMPAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AG2_OBRIGA: {
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
    tableName: 'AG2010'
  });
};
