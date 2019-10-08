/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SHH010', {
    HH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    HH_CTRAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    HH_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HH_RECURSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    HH_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    HH_OPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    HH_FERRAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    HH_USO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'SHH010'
  });
};
