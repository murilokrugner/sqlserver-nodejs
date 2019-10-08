/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QI6010', {
    QI6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI6_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QI6_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI6_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI6_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI6_CAUSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QI6_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI6_RAIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI6_METODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
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
    tableName: 'QI6010'
  });
};
