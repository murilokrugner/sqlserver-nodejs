/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SRT010', {
    RT_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RT_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RT_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RT_DATACAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RT_TIPPROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RT_VERBA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RT_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RT_DATABAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RT_DFERVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RT_DFERPRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RT_DFERANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RT_DFALVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RT_DFALPRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RT_TIPMOVI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RT_SALARIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RT_AVOS13S: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RT_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RT_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    tableName: 'SRT010'
  });
};
