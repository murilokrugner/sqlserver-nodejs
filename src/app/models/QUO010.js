/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QUO010', {
    QUO_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUO_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QUO_DESCGP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QUO_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QUO_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QUO_PRZHR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
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
    tableName: 'QUO010'
  });
};
