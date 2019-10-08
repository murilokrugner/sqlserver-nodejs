/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SGF010', {
    GF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GF_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    GF_ROTEIRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GF_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GF_COMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    GF_TRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    GF_FUNCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    tableName: 'SGF010'
  });
};
