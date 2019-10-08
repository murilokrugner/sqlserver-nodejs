/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RDH010', {
    RDH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDH_CODTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDH_CODNET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDH_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDH_NUMPAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RDH_NUMNIV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RDH_AUTOAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDH_FEEDBK: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    RDH_LIBRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDH_LIBDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'RDH010'
  });
};
