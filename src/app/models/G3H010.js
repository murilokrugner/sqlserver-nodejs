/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('G3H010', {
    G3H_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    G3H_CODAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    G3H_NOMEAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    G3H_CODVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    G3H_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G3H_INTEGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    G3H_TPATCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G3H_TPATEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G3H_TPATLZ: {
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
    tableName: 'G3H010'
  });
};
