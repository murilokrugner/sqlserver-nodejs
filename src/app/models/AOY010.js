/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AOY010', {
    AOY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AOY_CODTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AOY_NMTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    AOY_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AOY_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AOY_SUBTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AOY_TPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AOY_MSBLQL: {
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
    }
  }, {
    tableName: 'AOY010'
  });
};
