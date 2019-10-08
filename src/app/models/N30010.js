/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('N30010', {
    N30_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N30_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N30_PRONTU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    N30_VACINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N30_DOSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N30_IDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    N30_APLICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N30_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N30_POSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'N30010'
  });
};
