/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RF0010', {
    RF0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RF0_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RF0_DTPREI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RF0_HORINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF0_DTPREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RF0_HORFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RF0_CODABO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RF0_HORTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RF0_ABONA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RF0_NATEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RF0_USUAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RF0_FLAG: {
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
    tableName: 'RF0010'
  });
};
