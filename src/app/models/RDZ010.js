/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RDZ010', {
    RDZ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDZ_EMPENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDZ_FILENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDZ_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RDZ_CODENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                   '
    },
    RDZ_CODRD0: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDZ_ENTIND: {
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
    }
  }, {
    tableName: 'RDZ010'
  });
};
