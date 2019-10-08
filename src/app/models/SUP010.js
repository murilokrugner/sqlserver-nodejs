/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SUP010', {
    UP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UP_CODCAMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UP_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    UP_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    UP_SCORE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UP_COMPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UP_CODOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UP_IDTREE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    UP_TIPOOBJ: {
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
    tableName: 'SUP010'
  });
};
