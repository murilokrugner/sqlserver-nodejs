/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEB010', {
    EB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EB_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EB_REFBAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EB_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EB_OCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EB_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EB_MOTSIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EB_MOTBAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EB_DESCMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                      '
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
    tableName: 'SEB010'
  });
};
