/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SHB010', {
    HB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    HB_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    HB_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    HB_HRUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    HB_HRUTSAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    HB_HRUTDOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    HB_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    HB_UTEIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    HB_USO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    HB_REND: {
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
    }
  }, {
    tableName: 'SHB010'
  });
};
