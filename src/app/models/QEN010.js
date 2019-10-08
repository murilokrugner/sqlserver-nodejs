/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QEN010', {
    QEN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEN_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QEN_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEN_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QEN_ENSAIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEN_CONTAD: {
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
    tableName: 'QEN010'
  });
};
