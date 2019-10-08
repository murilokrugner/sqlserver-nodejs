/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ACJ010', {
    ACJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACJ_DDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACJ_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    ACJ_PAIS_I: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    ACJ_PAIS_E: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
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
    tableName: 'ACJ010'
  });
};
