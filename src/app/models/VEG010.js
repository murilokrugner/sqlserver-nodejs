/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VEG010', {
    VEG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VEG_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VEG_GRUFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VEG_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VEG_GRUPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    VEG_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                '
    },
    VEG_OCOMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VEG_REQUIS: {
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
    tableName: 'VEG010'
  });
};
