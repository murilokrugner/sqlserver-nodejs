/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AOV010', {
    AOV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AOV_CODSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AOV_DESSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    AOV_PRINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AOV_PAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AOV_MSBLQL: {
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
    tableName: 'AOV010'
  });
};
