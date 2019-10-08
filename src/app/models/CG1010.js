/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CG1010', {
    CG1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CG1_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CG1_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CG1_ALIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CG1_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    },
    CG1_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'CG1010'
  });
};
